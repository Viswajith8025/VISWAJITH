import React, { useEffect, useRef, useCallback, useMemo } from "react";

function parseColor(col) {
  if (col.startsWith("#")) {
    let hex = col.slice(1);
    if (hex.length === 3) {
      hex = hex.split("").map(c => c + c).join("");
    }
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  } else if (col.startsWith("rgb")) {
    const m = col.match(/\d+/g);
    return m ? { r: +m[0], g: +m[1], b: +m[2] } : { r: 168, g: 85, b: 247 };
  }
  return { r: 168, g: 85, b: 247 };
}

const MouseTrail = ({
  variant = "line",
  fillType = "gradient",
  trailColor = "#A855F7",
  trailColorEnd = "#6366F1",
  trailLength = 25,
  lineWidth = 2.5,
  fadeOut = true,
  smoothing = 0.4,
  blendMode = "screen",
  autoFade = true,
  fadeDuration = 0.8
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const trailPointsRef = useRef([]);
  const rafRef = useRef();
  const timeRef = useRef(performance.now());

  const baseRGBStart = useMemo(() => parseColor(trailColor), [trailColor]);
  const baseRGBEnd = useMemo(() => parseColor(trailColorEnd), [trailColorEnd]);

  const rgba = useCallback((a, t) => {
    if (fillType === "gradient") {
      const r = baseRGBStart.r + (baseRGBEnd.r - baseRGBStart.r) * t;
      const g = baseRGBStart.g + (baseRGBEnd.g - baseRGBStart.g) * t;
      const b = baseRGBStart.b + (baseRGBEnd.b - baseRGBStart.b) * t;
      return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, a))})`;
    }
    return `rgba(${baseRGBStart.r},${baseRGBStart.g},${baseRGBStart.b},${Math.max(0, Math.min(1, a))})`;
  }, [baseRGBStart, baseRGBEnd, fillType]);

  const addPoint = useCallback((x, y) => {
    const points = trailPointsRef.current;
    const last = points[points.length - 1];
    const s = Math.max(0.001, 1 - smoothing);
    const sx = last ? last.x + (x - last.x) * s : x;
    const sy = last ? last.y + (y - last.y) * s : y;
    
    points.push({ x: sx, y: sy, life: 1 });
    if (points.length > trailLength) {
      points.splice(0, points.length - trailLength);
    }
  }, [trailLength, smoothing]);

  const drawFrame = useCallback((dt) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = blendMode;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const points = trailPointsRef.current;
    if (autoFade && points.length) {
      const decay = dt / Math.max(0.001, fadeDuration);
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].life -= decay;
        if (points[i].life <= 0) points.splice(i, 1);
      }
    }

    if (points.length < 2) return;

    const indexAlpha = (i, n) => {
      if (!fadeOut) return 1;
      const t = n <= 1 ? 1 : i / (n - 1);
      return t * t; // Smooth parabolic fade
    };

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let i = 1; i < points.length; i++) {
      const p1 = points[i - 1];
      const p2 = points[i];
      const t = i / (points.length - 1);
      const lifeFactor = autoFade ? points[i].life : 1;
      const a = indexAlpha(i, points.length) * lifeFactor;
      const widthScale = fadeOut ? 0.2 + 0.8 * a : 1;

      ctx.strokeStyle = rgba(a * 0.8, t);
      ctx.lineWidth = Math.max(0.5, lineWidth * widthScale);
      
      // Add subtle glow
      ctx.shadowBlur = 4 * a;
      ctx.shadowColor = rgba(a, t);

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }, [rgba, lineWidth, fadeOut, blendMode, autoFade, fadeDuration]);

  const animate = useCallback(() => {
    const now = performance.now();
    let dt = (now - timeRef.current) / 1000;
    dt = Math.max(0, Math.min(dt, 0.05));
    timeRef.current = now;
    drawFrame(dt);
    rafRef.current = requestAnimationFrame(animate);
  }, [drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handlePointerMove = (e) => {
      addPoint(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    timeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, addPoint]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  );
};

export default MouseTrail;

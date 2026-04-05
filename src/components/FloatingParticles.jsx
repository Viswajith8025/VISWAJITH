import React, { useEffect, useRef, useState, useCallback } from "react";

const FloatingParticles = ({
  particleCount: initialParticleCount = 350,
  particleSize = 2.2,
  particleOpacity = 0.6,
  glowIntensity = 10,
  movementSpeed = 0.4,
  mouseInfluence = 180,
  backgroundColor = "transparent",
  particleColor = "#A855F7",
  mouseGravity = "repel",
  gravityStrength = 60,
  glowAnimation = "ease",
  particleInteraction = true,
  interactionType = "merge"
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef([]);
  const containerRef = useRef(null);

  // High-fidelity performance modulation for mobile/tablet
  const getParticleCount = () => {
    if (typeof window === "undefined") return initialParticleCount;
    if (window.innerWidth < 768) return 60;
    if (window.innerWidth < 1024) return 120;
    return initialParticleCount;
  };

  const [currentCount, setCurrentCount] = useState(getParticleCount);

  const initializeParticles = useCallback((width, height) => {
    return Array.from({ length: currentCount }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * movementSpeed,
      vy: (Math.random() - 0.5) * movementSpeed,
      size: Math.random() * particleSize + 0.8,
      opacity: particleOpacity,
      baseOpacity: particleOpacity,
      mass: Math.random() * 0.5 + 0.5,
      id: index,
      glowMultiplier: 1,
      glowVelocity: 0
    }));
  }, [currentCount, particleSize, particleOpacity, movementSpeed]);

  const redistributeParticles = useCallback((width, height) => {
    particlesRef.current.forEach(particle => {
      particle.x = Math.random() * width;
      particle.y = Math.random() * height;
    });
  }, []);

  const updateParticles = useCallback((canvas) => {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouse = mouseRef.current;

    particlesRef.current.forEach((particle, index) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseInfluence && distance > 0) {
        const force = (mouseInfluence - distance) / mouseInfluence;
        const normalizedDx = dx / distance;
        const normalizedDy = dy / distance;

        // Intensified repulsion for a snappier feel
        const gravityForce = force * (gravityStrength * 0.0015);

        if (mouseGravity === "attract") {
          particle.vx += normalizedDx * gravityForce;
          particle.vy += normalizedDy * gravityForce;
        } else if (mouseGravity === "repel") {
          particle.vx -= normalizedDx * gravityForce;
          particle.vy -= normalizedDy * gravityForce;
        }

        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.5);

        // Dynamic glow based on mouse proximity
        const targetGlow = 1 + force * 2.5;
        const currentGlow = particle.glowMultiplier || 1;
        const easeSpeed = 0.2;
        particle.glowMultiplier = currentGlow + (targetGlow - currentGlow) * easeSpeed;
      } else {
        particle.opacity = Math.max(particle.baseOpacity * 0.4, particle.opacity - 0.015);
        const targetGlow = 1;
        const currentGlow = particle.glowMultiplier || 1;
        const easeSpeed = 0.1;
        particle.glowMultiplier = Math.max(1, currentGlow + (targetGlow - currentGlow) * easeSpeed);
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      // Floating jitter for organic movement
      particle.vx += (Math.random() - 0.5) * 0.002;
      particle.vy += (Math.random() - 0.5) * 0.002;

      // Slight friction
      particle.vx *= 0.995;
      particle.vy *= 0.995;

      // Wrap around screen
      if (particle.x < 0) particle.x = rect.width;
      if (particle.x > rect.width) particle.x = 0;
      if (particle.y < 0) particle.y = rect.height;
      if (particle.y > rect.height) particle.y = 0;
    });
  }, [mouseInfluence, mouseGravity, gravityStrength]);

  const drawParticles = useCallback((ctx) => {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    const n = particles.length;
    const maxLineDist = 160;
    const maxLineDistSq = maxLineDist * maxLineDist;

    // Pulse animation factor based on time
    const pulse = Math.sin(Date.now() * 0.002) * 0.2 + 0.8;

    // Draw Constellation Lines
    ctx.save();
    for (let i = 0; i < n; i++) {
      const p1 = particles[i];

      // 1. Mouse-to-Particle Connectivity (Magnetic Effect)
      const mdx = mouseRef.current.x - p1.x;
      const mdy = mouseRef.current.y - p1.y;
      const mDistSq = mdx * mdx + mdy * mdy;
      const mouseMaxLineDistSq = 200 * 200;

      if (mDistSq < mouseMaxLineDistSq) {
        const mDistance = Math.sqrt(mDistSq);
        const mOpacity = (1 - mDistance / 200) * 0.5;
        ctx.strokeStyle = `rgba(168, 85, 247, ${mOpacity})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      }

      // 2. Particle-to-Particle Continuity
      for (let j = i + 1; j < n; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxLineDistSq) {
          const distance = Math.sqrt(distSq);
          const opacity = (1 - distance / maxLineDist) * 0.4;
          ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    ctx.restore();

    // Draw Particles
    particles.forEach(particle => {
      ctx.save();
      const currentGlowMultiplier = (particle.glowMultiplier || 1) * pulse;

      ctx.shadowColor = particleColor;
      // Boosted glow intensity
      ctx.shadowBlur = (glowIntensity + 4) * currentGlowMultiplier * 3.2;
      // Dynamic opacity boost
      ctx.globalAlpha = Math.min(1, particle.opacity * 1.25);
      ctx.fillStyle = particleColor;

      ctx.beginPath();
      // Particles pulse in size for a 'breathing' organic feel
      const animatedSize = (particle.size + 0.4) * (0.92 + pulse * 0.08);
      ctx.arc(particle.x, particle.y, animatedSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }, [particleColor, glowIntensity]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    updateParticles(canvas);
    drawParticles(ctx);
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    if (particlesRef.current.length === 0) {
      particlesRef.current = initializeParticles(rect.width, rect.height);
    }
  }, [initializeParticles]);

  useEffect(() => {
    const handleResize = () => {
      resizeCanvas();
      setCurrentCount(getParticleCount());
    };

    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, handleMouseMove, resizeCanvas]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundColor,
        zIndex: 0,
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
};

export default FloatingParticles;

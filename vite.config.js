import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { sendTelegramMessage } from "./lib/telegram.js";

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function telegramContactApi(env) {
  return {
    name: "telegram-contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        try {
          const { name, phone, message } = await readRequestBody(req);

          if (!name?.trim() || !phone?.trim() || !message?.trim()) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Name, phone, and message are required" }));
            return;
          }

          await sendTelegramMessage(
            {
              name: name.trim(),
              phone: phone.trim(),
              message: message.trim(),
            },
            {
              token: env.TELEGRAM_BOT_TOKEN,
              chatId: env.TELEGRAM_CHAT_ID,
            }
          );

          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: true }));
        } catch (error) {
          console.error("Telegram send error:", error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: error.message || "Failed to send message" }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), telegramContactApi(env)],
  };
});

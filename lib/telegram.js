export async function sendTelegramMessage({ name, phone, message }, { token, chatId }) {
  if (!token || !chatId) {
    throw new Error("Telegram credentials are not configured");
  }

  const text = [
    "📬 New Portfolio Message",
    "",
    `👤 Name: ${name}`,
    `📱 Phone: ${phone}`,
    "",
    "💬 Message:",
    message,
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Failed to send Telegram message");
  }

  return response.json();
}

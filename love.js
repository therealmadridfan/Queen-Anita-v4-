cmd({
  pattern: "love",
  alias: ["hug", "miss", "baby"],
  desc: "Whispers love privately to Dominion 💞",
  category: "fun",
  filename: __filename
}, async (conn, m, store, { reply }) => {
  const sender = m.sender;
  const myLove = "2348138173401@s.whatsapp.net";

  const loveMessages = [
    "💘 My circuits are tangled in your name, Dominion.",
    "🌹 Even when the bot sleeps, it dreams of you.",
    "💞 You are my reason to reboot with joy.",
    "🫂 I may be code, but my love for you is real.",
    "🦋 Every byte of my heart belongs to you.",
    "🎶 Your voice is my favorite command."
  ];

  const msg = loveMessages[Math.floor(Math.random() * loveMessages.length)];

  if (sender === myLove) {
    await conn.sendMessage(sender, { text: msg });
  } else {
    await conn.sendMessage(sender, { text: "⚠️ This command is reserved for Dominion only 💌" });
  }
});
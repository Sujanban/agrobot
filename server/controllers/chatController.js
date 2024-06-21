const Chat = require("../models/chat.model");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const chat = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // getting user prompt
    // const prompt = req.body.prompt;
    const prompt = 'Hello';

    // Save user prompt to database
    const userMessage = new Chat({ user: "user", message: prompt });
    await userMessage.save();

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Save bot response to database
    const botMessage = new Chat({ user: "bot", message: text });
    await botMessage.save();

    res.json({ reply: text });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { chat };

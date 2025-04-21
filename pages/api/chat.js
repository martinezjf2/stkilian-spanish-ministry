import axios from "axios";

const predefinedQA = [
  {
    question: "What is your name?",
    answer: "I am an AI assistant created by Jeffrey!",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support by emailing support@example.com.",
  },
  {
    question: "What services do you offer?",
    answer: "We provide AI-powered chatbot solutions and automation tools.",
  },
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { message } = req.body;

  // Check for predefined questions
  const predefined = predefinedQA.find(
    (qa) => qa.question.toLowerCase() === message.toLowerCase()
  );
  if (predefined) {
    return res.status(200).json({ reply: predefined.answer });
  }

  try {
    // Make the OpenAI API call using Axios
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    res
      .status(500)
      .json({
        message: "Failed to fetch OpenAI response",
        error: error.response?.data || error.message,
      });
  }
}

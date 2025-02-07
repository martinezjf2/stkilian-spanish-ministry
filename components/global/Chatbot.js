import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Toggle chat window

  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Show or hide chat window
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput(""); // Clear input field

    try {
      const response = await axios.post("/api/chat", { message: input });
      const botMessage = { role: "assistant", content: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="fixed bottom-5 transition-all hover:animate-bounce right-5 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          💬 Chat
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Welcome to AI Chatbot</h3>
            <button onClick={toggleChatbot} className="text-white">
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded ${
                  msg.role === "user"
                    ? "bg-blue-200 text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                <strong>{msg.role === "user" ? "You:" : "Bot:"}</strong>{" "}
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 border rounded-l"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

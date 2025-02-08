import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const lastMessageRef = useRef(null); // Reference to the last message

  // Function to handle opening the chat window with a welcome message
  const toggleChatbot = () => {
    if (!isOpen) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Welcome to St. Kilian! My name is Gio. How can I help you today?",
        },
      ]);
    }
    setIsOpen(!isOpen); // Toggle open/close state
  };

  // Scroll to the latest message when messages update
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
          className="fixed bottom-5 right-5 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700"
        >
          💬 Chat
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">AI Chatbot</h3>
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
                <strong>{msg.role === "user" ? "You:" : "Gio:"}</strong>{" "}
                {msg.content}
              </div>
            ))}
            {/* Dummy div for scrolling */}
            <div ref={lastMessageRef}></div>
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

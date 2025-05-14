function ChatBotPage() {
  return (
    <div className="chatbot-page">
      <header className="chatbot-header">🤖 Chat with Salee</header>
      
      <div className="chatbot-container">
        <div className="chat-messages">
          {/* Map of message bubbles */}
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
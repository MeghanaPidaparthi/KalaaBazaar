import React, { useState } from 'react';

const Kalamitra = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#fff',
    color: '#333',
    height: '100vh',
  };

  const greetingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  };

  const buttonStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px 30px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
  };

  const chatBoxStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '600px',
    backgroundColor: '#e6e9ef',
    borderRadius: '25px',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const chatInputStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: '#333',
  };

  const iconStyle = {
    fontSize: '24px',
    cursor: 'pointer',
  };

  const messageContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
  };

  const userMessageStyle = {
    backgroundColor: '#dff7ff',
    borderRadius: '12px',
    padding: '12px 18px',
    marginBottom: '10px',
    textAlign: 'left',
    maxWidth: '70%',
    color: '#333',
  };

  const aiMessageStyle = {
    backgroundColor: '#fbe6ea',
    borderRadius: '12px',
    padding: '12px 18px',
    marginBottom: '10px',
    textAlign: 'left',
    maxWidth: '70%',
    color: '#333',
  };

  const profilePicStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const handlePromptClick = (prompt) => {
    setMessages([...messages, { text: prompt, isUser: true }]);
    generateResponse(prompt);
  };

  const generateResponse = (userMessage) => {
    const responses = {
      'Explain the history of Madhubani paintings.': 'Madhubani painting is a folk art that originated in Bihar, characterized by intricate patterns and vibrant colors.',
      'Give me new ideas for a painting': 'Try painting a landscape at sunset or a modern abstract piece with mixed textures.',
      'What are the supplies to be purchased for crocheting?': 'For crocheting, you’ll need yarn, a crochet hook, scissors, and a needle for weaving in ends.',
    };
    const response = responses[userMessage] || "I'm not sure how to answer that, but I'll try to learn!";
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: response, isUser: false }]);
    }, 500);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      handlePromptClick(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...greetingStyle }}>
        Hello,<br /> How have you been?
      </div>
      <div style={buttonContainerStyle}>
        <div
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = buttonHoverStyle.transform)}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handlePromptClick('Explain the history of Madhubani paintings.')}
        >
          Explain the history of Madhubani paintings.
        </div>
        <div
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = buttonHoverStyle.transform)}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handlePromptClick('Give me new ideas for a painting')}
        >
          Give me new ideas for a painting
        </div>
        <div
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = buttonHoverStyle.transform)}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handlePromptClick('What are the supplies to be purchased for crocheting?')}
        >
          What are the supplies to be purchased for crocheting?
        </div>
      </div>
      <div style={{ marginTop: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...messageContainerStyle,
              justifyContent: message.isUser ? 'flex-end' : 'flex-start',
            }}
          >
            {!message.isUser && <img src="path_to_ai_profile_picture.png" alt="AI" style={profilePicStyle} />}
            <div style={message.isUser ? userMessageStyle : aiMessageStyle}>{message.text}</div>
            {message.isUser && <img src="path_to_user_profile_picture.png" alt="User" style={profilePicStyle} />}
          </div>
        ))}
      </div>
      <div style={chatBoxStyle}>
        <form onSubmit={handleInputSubmit} style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Ask us a question!"
            value={inputValue}
            onChange={handleInputChange}
            style={chatInputStyle}
          />
        </form>
        <span style={iconStyle}>🎤</span>
      </div>
      {/* Placeholder for icons */}
      <div style={{ position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ ...iconStyle, marginBottom: '20px' }}>🔔</div>
        <div style={{ ...iconStyle, marginBottom: '20px' }}>⏰</div>
        <div style={{ ...iconStyle }}>⚙️</div>
      </div>
    </div>
  );
};

export default Kalamitra;

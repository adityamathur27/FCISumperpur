import React, { useState } from 'react';
import './WhatsAppIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const WhatsAppIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '9414197791'; // 🔁 Replace with your WhatsApp number

  const handleSend = () => {
    if (!message.trim()) return;

    const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="wa-widget-container">
      {isOpen && (
        <div className="wa-chat-box">
          <div className="wa-header">
            <span>Chat with us</span>
            <FontAwesomeIcon icon={faTimes} onClick={() => setIsOpen(false)} className="wa-close-icon" />
          </div>
          <div className="wa-body">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={3}
            />
            <button className="wa-send-button" onClick={handleSend}>
              <FontAwesomeIcon icon={faPaperPlane} /> Send
            </button>
          </div>
        </div>
      )}

      <button className="wa-icon-button" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </button>
    </div>
  );
};

export default WhatsAppIcon;

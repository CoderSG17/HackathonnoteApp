import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import '../Pages/Share.css'

const Share = () => {
  const [showPopup, setShowPopup] = useState(false);
  const noteText = 'This is a sample note that can be shared.';

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const shareViaGmail = () => {
    const mailtoLink = `mailto:?subject=Shared note&body=${encodeURIComponent(noteText)}`;
    window.location.href = mailtoLink;
  };

  const shareViaWhatsApp = () => {
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(noteText)}`;
    window.open(whatsappLink, '_blank');
  };

  const shareViaFacebook = () => {
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(noteText)}`;
    window.open(facebookLink, '_blank');
  };

  return (
    <div>
      <div className="note-container">
        <div className="note">
          <button className="share-button" onClick={togglePopup}>
            Share <FaShareAlt />
          </button>
        </div>
      </div>

      {showPopup && (
        <div id="share-popup" className="share-popup">
          <button className="close-button" onClick={togglePopup}>X</button>
          <br />
          <ul>
            <li><button onClick={shareViaGmail}>Gmail</button></li>
            <li><button onClick={shareViaWhatsApp}>WhatsApp</button></li>
            <li><button onClick={shareViaFacebook}>Facebook</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Share;

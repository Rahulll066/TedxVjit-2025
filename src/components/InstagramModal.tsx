import React from "react";

interface InstagramModalProps {
  open: boolean;
  onClose: () => void;
}

const InstagramModal: React.FC<InstagramModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      <div
        style={{
          background: "#111",
          borderRadius: "16px",
          padding: "3rem 2.5rem",
          maxWidth: "600px",
          minWidth: "350px",
          width: "90vw",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          border: "2px solid #ea1f1fff",
        }}
        className="tedx-instagram-modal"
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 1,
            right: 10,
            background: "none",
            border: "none",
            fontSize: "2.7rem",
            color: "#ea1f1fff",
            cursor: "pointer",
            lineHeight: 1,
          }}
          aria-label="Close"
          className="tedx-instagram-modal-close"
        >
          &times;
        </button>
        <h2
          style={{
            color: "#fff",
            marginBottom: "1.2rem",
            fontWeight: 700,
            fontSize: "2rem",
            textShadow: "0 0 8px #e1306c",
            paddingTop: "15px",
          }}
          className="tedx-instagram-modal-title"
        >
          🎉 Welcome to TEDˣ VJIT!
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "0.5rem",
            color: "#fff",
          }}
          className="tedx-instagram-modal-text"
        >
          <span role="img" aria-label="chocolate">🍫</span> Chocolate in hand? Perfect! Now get ready for a journey full of ideas worth spreading at TEDˣ VJIT! <span role="img" aria-label="sparkles">✨</span>
        </p>
      </div>
    </div>
  );
};

export default InstagramModal;

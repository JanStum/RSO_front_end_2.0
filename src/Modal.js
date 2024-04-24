import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  render() {
    const { isOpen, subtitle, onClose } = this.props;

    if (!isOpen || !subtitle) {
      return null; // Pusti prazno, če okno ni odprto ali ni izbranega desetletja
    }

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{subtitle.name}</h2>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
          <div className="modal-body">
            <p>{subtitle.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

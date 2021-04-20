import React from "react";

const MovieDetailModal = ({ onClose, children }) => {
  return (
    <div>
      <div>
        <button onClick={onClose}>X</button>
      </div>
      {children}
    </div>
  );
};

export default MovieDetailModal;

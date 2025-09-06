import React, { useState, useEffect } from "react";
import "../CSS/newsModal.css";
import img from '../images/hire.jpeg'
import {  useNavigate } from "react-router-dom";

const NewsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Navigate=useNavigate();
  
  useEffect(() => {
    // Open modal automatically when page loads
    setIsOpen(true);
  }, []);
  
  const closeModal = () => {
    setIsOpen(false);
  };

  function onClickImage(){
    Navigate('/jobs');
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn-news" onClick={closeModal}>
              &times;
            </button>
            <img
              src={img} // 👉 replace with your image
              alt="Latest News"
              className="news-image"
              onClick={onClickImage}
            />
            <h2 className="news-title">Latest News</h2>
            <p className="news-text">
              Exciting updates are here! 🚀 Check out our latest opportunities and announcements. 
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsModal;

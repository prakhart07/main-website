import React, { useState, useEffect } from "react";
import "../CSS/courseModal.css";
import { saveCourseEnquiry } from "../API/dbConnection";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CourseRegistrationModal({ isOpen, onClose, courseName }) {

    const Navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseName || "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, course: courseName })); // update when course changes
  }, [courseName]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    const res=saveCourseEnquiry(formData);

    if(res){
        toast.success("Submitted Successfully!", {
              onClose: () => {
                // ✅ Navigate only after toast closes
                setFormData({
                                name: "",
                                email: "",
                                phone: "",
                                course: courseName || "",
                            })
                onClose();
              },
              autoClose: 3000, // show for 3 sec
            });
    }
    else{
        toast('Something Went Wrong');
    }

    
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
  <button
    className="close-btn"
    onClick={() => {
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: courseName || "",
      });
    }}
  >
    &times;
  </button>
        <h2 className="modal-title">Course Registration</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          {/* Course field locked to the applied course */}
          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              readOnly
              className="readonly-input"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button  className="submit-btn" onClick={handleSubmit}>
            Register Now
          </button>
        </form>
      </div>
        <ToastContainer/>
    </div>
  );
}

export default CourseRegistrationModal;

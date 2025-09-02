import React, { useState } from "react";
import "../CSS/jobApplication.css";

function JobApplication (){
  const [formData, setFormData] = useState({
    post: "",
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    address: "",
    qualification: "",
    degreeStatus:"",
    institute:"",
    year:"",
    percentage:"",
    link:"",
    resume:""

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="job-form-container">
      <h2 className="form-title">Job Application Form</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        
        {/* Post Selection */}
        <div className="form-group">
          <label htmlFor="post">Select Post</label>
          <select
            id="post"
            name="post"
            value={formData.post}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose a Post --</option>
            <option value="DM">Digital Marketing Intern</option>
            <option value="GD">Graphic Designer Intern</option>
            <option value="UI/UX">UI/UX Intern</option>
            <option value="HR">HR Intern/Trainee</option>
            <option value="MngTr">Management Trainee</option>
          </select>
        </div>

        {/* Personal Info */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Father's Name</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea name="address" rows="3" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
            <label>Qualification</label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose Qualification --</option>
                <option value="school">10th/12th</option>
                <option value="Diploma">Diploma/ITI</option>
                <option value="Comm ug">B.A./BBA/B.Com/B.Design/B.FD/B.FA/B.Sc</option>
                <option value="Er ug">B.E./B.Tech</option>
                <option value="Comm pg">M.A./M.B.A./M.Com/M.Design/M.FD/M.FA/M.Sc</option>
                <option value="Er pg">M.E./M.Tech</option>
                <option value="Other">Other</option>
              </select>
        </div>

        <div className="form-group">
          <label>Institue</label>
          <input name="institute" value={formData.institute} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="status"
                value="Pursuing"
                disabled={!formData.qualification} 
                checked={formData.status === "Pursuing"}
                onChange={handleChange}
              />
              Pursuing
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="Passed"
                disabled={!formData.qualification} 
                checked={formData.status === "Passed"}
                onChange={handleChange}
              />
              Passed
            </label>
          </div>
        </div>

        {formData.qualification !== "" && formData.status === "Passed"  && (
          <div className="form-group passed-extra">
            <label>Passing Year</label>
            <select
              id="passingYear"
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
            >
              <option value="">-- Select Year --</option>
              {Array.from({ length: 25 }, (_, i) => {
                const year = 2025 - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>

            <label>Percentage</label>
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              placeholder="Enter %"
              min="0"
              max="100"
              step="0.01"
            />
          </div>
        )}
            {/* Upload Resume */}
          <div className="form-group">
            <label>Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  resume: e.target.files[0], // store file object
                })
              }
            />
            {formData.resume && (
              <p style={{ fontSize: "14px", color: "green" }}>
                ✅ {formData.resume.name} uploaded
              </p>
            )}
          </div>
          {/* Upload Resume */}

          {/* Portfolio Link */}
          <div className="form-group">
            <label>Portfolio Link</label>
            <input
              type="url"
              name="portfolio"
              placeholder="https://yourportfolio.com"
              value={formData.portfolio || ""}
              onChange={handleChange}
              
            />
          </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplication;

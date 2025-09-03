import React, { useState } from "react";
import "../CSS/jobApplication.css";
import { saveApplication, saveFile } from "../API/dbConnection";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function JobApplication (){

  const Navigate=useNavigate(); 
  const [resumeFile, setResumeFile] = useState(null);
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
    resumeURL:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  async function handleSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted:", formData);

  const resumeURLRecieved = await saveFile(resumeFile);

  if (resumeURLRecieved) {
    console.log("url from db:", resumeURLRecieved);

    // ✅ create updated formData with resume URL
    const updatedFormData = {
      ...formData,
      resumeURL: resumeURLRecieved.fullPath, // or resumeURLRecieved.publicUrl if you want direct URL
    };

    setFormData(updatedFormData); // update state for UI consistency

    console.log("resume saved now proceeding");
    handleApplicationSave(updatedFormData); // ✅ pass updated data directly
  } else {
    console.log("Error in file upload:");
    alert("resume save failed");
  }
}

function handleApplicationSave(dataToSave) {
  console.log("calling application saving api", dataToSave);
  alert("info saving func");

  const res = saveApplication(dataToSave);

  if (res) {
     toast.success("Application Submitted Successfully!", {
      onClose: () => {
        // ✅ Navigate only after toast closes
        Navigate("/jobs");
      },
      autoClose: 3000, // show for 3 sec
    });
  } else {
    toast("Error in submitting application. Please try again.");
    alert("info save failed");
  }
}


  return (
    <div className="job-form-container">
      
      <h2 className="form-title">Job Application Form</h2>
      <form className="job-form">
        
        {/* Post Selection */}
        <div className="form-group">
          <label >Select Post</label>
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
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
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
                name="degreeStatus"
                value="Pursuing"
                disabled={!formData.qualification} 
                checked={formData.degreeStatus === "Pursuing"}
                onChange={handleChange}
              />
              Pursuing
            </label>
            <label>
              <input
                type="radio"
                name="degreeStatus"
                value="Passed"
                disabled={!formData.qualification} 
                checked={formData.degreeStatus === "Passed"}
                onChange={handleChange}
              />
              Passed
            </label>
          </div>
        </div>

        {formData.qualification !== "" && formData.degreeStatus === "Passed"  && (
          <div className="form-group passed-extra">
            <label>Passing Year</label>
            <select
              id="passingYear"
              name="year"
              value={formData.year}
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
              accept=".pdf"
              required
              onChange={handleFileChange}
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
              name="link"
              placeholder="https://yourportfolio.com"
              value={formData.link || ""}
              onChange={handleChange}
              
            />
          </div>

        <button  className="submit-btn" onClick={handleSubmit}>Submit Application</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default JobApplication;

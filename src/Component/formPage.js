import '../CSS/careers.css';

function FormPage(){

    return(
        <div className="career">
          <div className="career-form">
            <form  encType="multipart/form-data">
              <input type="text" name="name" placeholder="Name" className="career-form-txt" required />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact number" maxLength={10} className="career-form-phone" />
              <input type="email" name="email" placeholder="Email" className="career-form-email" required />
              <div className="radio-class">
                <h2 className="name">Apply For Which Post?</h2>
                <label className="radio">
                  <input className="radio-one" type="radio" defaultChecked="checked" name="status" defaultValue="Web Developer" />
                  <span className="checkmark" />
                  UI/UX Intern
                </label>
                <label className="radio">
                  <input className="radio-two" type="radio" name="status" defaultValue="Mobile App Developer" />
                  <span className="checkmark" />
                  Digital Maketing Intern
                </label>
                <label className="radio">
                  <input className="radio-three" type="radio" name="status" defaultValue="Full-Stack Developer" />
                  <span className="checkmark" />
                  Management Trainee
                </label>
                <label className="radio">
                  <input className="radio-four" type="radio" name="status" defaultValue="Talent Acquisition" />
                  <span className="checkmark" />
                  Graphic Designer Intern
                </label>
                <label className="radio">
                  <input className="radio-five" type="radio" name="status" defaultValue="Business Development" />
                  <span className="checkmark" />
                  HR Trainee
                </label>
                {/* <label class="radio">
                    <input class="radio-six" type="radio"  name="status" value="Business Development Executive">
                    <span class="checkmark"></span>
                    asd
                  </label> */}
              </div>
              {/* <input type="number" id="experience" name="experience" required placeholder="Years of Experience" className="career-form-experience" /> */}
              <textarea placeholder="Description" name="details" className="career-form-txtarea" required defaultValue={""} />
              <div className="file">
                <h2 className="name">Upload Your Resume</h2>
                <input className="upload" type="file" name="fileToUpload" accept=".doc,.docx,.pdf" /><br /><br /><br />
              </div>
              <input type="submit" defaultValue="Submit" name="submit" className="career-form-btn" />
            </form>
          </div>
        </div>
    )
}
export default FormPage;
import { useState } from 'react';
import '../CSS/style.css';
import { saveContact } from '../API/dbConnection';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function GetInTouch(){

  const Navigate=useNavigate();

  const [contact,setContact]=useState({name:'',phone:'',email:'',purpose:'',message:''});

  function handleOnChange(e){
    setContact({...contact,[e.target.name]:e.target.value});
  }

  async function handleSubmit(e){
   try {
const res = await saveContact(contact); // waits here
// optionally verify success, e.g., res.ok or res.status / res.success
 toast.success("Thank you for contacting GENKAIX. The team will review and reply soon", {
      onClose: () => {
        // ✅ Navigate only after toast closes
        setContact({name:'',phone:'',email:'',message:''});
        // Navigate("/contact");
      },
      autoClose: 3000, // show for 3 sec
    }); // then toast
} catch (err) {
toast( err.message || 'Something Went Wrong'); // error toast
}
    }
    // console.log("response from db:",res.then((res)=>{
    //   if(res.ok==200){
    //       Toastify.success('Title','Success!');
    //   }
    //   else{
    //     Toastify.danger('Title','Bad Request!');
    //   }
    // }));

    return(
        <div>
          <section id="home" className="home">
          <h1>Contact Us</h1>
        </section>
      
        <section id="contact" className="contact">
          <h1 className="heading">get in touch</h1>
        </section>
        <div className="contact-in">
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin" width="100%" height="auto" style={{border: 0}} allowFullScreen loading="lazy" />
          </div>
          <div className="contact-form">
            <>
              <div className='form-group-contact'>
               {/* <label className='form-label'>Enquiry For</label> */}
                    <select
                id="post"
                name="purpose"
                placeholder="Enquiry For"
                className='form-group-contact'
                value={contact.purpose}
                onChange={handleOnChange}
                required
              >
                <option value="">-- Enquiry For --</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Website">Website</option>
                <option value="E-Commerce Website">E-Commerce Website</option>
                <option value="Custom Software">Custom Software</option>
                <option value="Internship">Internship</option>
                <option value="Certification Course">Certification Course</option>
                <option value="Data Migration">Data Migration</option>
                <option value="App Development">App Development</option>
                <option value="Cloud Services">Cloud Services</option>
              </select>
              </div>
              <input type="text" name="name" placeholder="Name" className="contact-form-txt" value={contact.name} required onChange={handleOnChange} />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact number" value={contact.phone} maxLength={10} className="contact-form-txt" onChange={handleOnChange}/>
              <input type="email" name="email" placeholder="Email" className="contact-form-txt" value={contact.email} onChange={handleOnChange}/>
              
              <textarea placeholder="Your Message" name="message" className="contact-form-txtarea" value={contact.message} required defaultValue={""} onChange={handleOnChange}/>
              <button className="contact-form-btn" onClick={handleSubmit}>Submit</button>
              <ToastContainer/>
            </>
          </div>
        </div>
        <div>
        <h1 className='heading'>For Enquiry Mail Us At-info@genkaix.com</h1>
        </div>
        {/* <h2 className='heading'>info@genkaix.com</h2> */}
      </div>
    )
}
export default GetInTouch;
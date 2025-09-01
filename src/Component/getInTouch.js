import { useState } from 'react';
import '../CSS/style.css';
import { saveContact } from '../API/dbConnection';
import { ToastContainer,toast } from 'react-toastify';

function GetInTouch(){

  const [contact,setContact]=useState({name:'',phone:'',email:'',message:''});

  function handleOnChange(e){
    setContact({...contact,[e.target.name]:e.target.value});
  }

  async function handleSubmit(e){
   try {
const res = await saveContact(contact); // waits here
// optionally verify success, e.g., res.ok or res.status / res.success
toast('SUCCESS!'); // then toast
} catch (err) {
toast( err.message || 'BAD REQUEST'); // error toast
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
              <input type="text" name="name" placeholder="Name" className="contact-form-txt" required onChange={handleOnChange} />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact number" maxLength={10} className="contact-form-phone" onChange={handleOnChange}/>
              <input type="email" name="email" placeholder="Email" className="contact-form-email" required onChange={handleOnChange}/>
              <textarea placeholder="Your Message" name="message" className="contact-form-txtarea" required defaultValue={""} onChange={handleOnChange}/>
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
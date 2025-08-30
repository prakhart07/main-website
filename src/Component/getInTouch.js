import '../CSS/style.css';

function GetInTouch(){
    return(
        <div>
        <section id="contact" className="contact">
          <h1 className="heading">get in touch</h1>
        </section>
        <div className="contact-in">
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin" width="100%" height="auto" style={{border: 0}} allowFullScreen loading="lazy" />
          </div>
          <div className="contact-form">
            <form action="./contactme.php" method="POST">
              <input type="text" name="name" placeholder="Name" className="contact-form-txt" required />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact number" maxLength={10} className="contact-form-phone" />
              <input type="email" name="email" placeholder="Email" className="contact-form-email" required />
              <textarea placeholder="Your Message" name="message" className="contact-form-txtarea" required defaultValue={""} />
              <input type="submit" defaultValue="Submit" name="submit" className="contact-form-btn" />
            </form>
          </div>
        </div>
      </div>
    )
}
export default GetInTouch;
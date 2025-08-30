import { useNavigate } from 'react-router-dom';
import '../CSS/style.css';

function Contact(){

    const Navigate=useNavigate();
    function contactNow(){
        Navigate('/contact');
    }
    return(
        <div className="communicate">
        <h3>Contact us now to start transforming your business.</h3>
        <p>We are available 24x7.</p>
        <a><button className="btn" onClick={contactNow}>Contact Now</button></a>
      </div>
    )
}
export default Contact;
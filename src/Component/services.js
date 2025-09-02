import '../CSS/style.css';
import img1 from '../images/generated-image (16).png'
import img2 from '../images/generated-image (17).png'
import img3 from '../images/generated-image (21).png'
import img4 from '../images/generated-image (20).png'
import img5 from '../images/app-dev.png';
import { useNavigate } from 'react-router-dom';

const service=[{image:img1},{image:img2},{image:img3},{image:img4}];

function Services(){

  const Navigate=useNavigate();

  function toServicePage(){
    Navigate('/services');
  }
    return(
        <div className="pt-5 pb-5 border-t" style={{backgroundColor: '#f5f5f5'}}>
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12" id="service">
              <h1>Our Services</h1>
              <p>We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
              </p>
            </div>
              {service.map((serv)=>(
                <div className="col-lg-6 col-sm-6">
                  <div className="item service-item highlight-on-hover">
                    <img src={serv.image} alt="Application Development" className="bg-img shadow" />
                    <div className="service-content">
                      {/* <span className="icon feature_box_col_one"><i className="fa fa-desktop" /></span>
                      <h6>Website Development</h6> */}
                      {/* <p>We build responsive, user-friendly and high-performance websites</p> */}
                      {/* <button className="btn">Enquiry</button> */}
                    </div>
                  </div>
                </div>
              ))}
                <div className="col-12 text-center mt-3">
                <button className="btn" onClick={toServicePage}>Services</button>
                </div>
          </div>
        </div>
      </div>
    )
}
export default Services;
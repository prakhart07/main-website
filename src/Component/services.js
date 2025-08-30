import '../CSS/style.css';
import img1 from '../images/generated-image (16).png'
import img2 from '../images/generated-image (17).png'
import img3 from '../images/generated-image (15).png'
import img4 from '../images/generated-image (11).png'
import img5 from '../images/app-dev.png';

function Services(){
    return(
        <div className="pt-5 pb-5 border-t" style={{backgroundColor: '#f5f5f5'}}>
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12" id="service">
              <h1>Our Services</h1>
              <p>We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
              </p>
            </div>
            <div className="col-lg-6 col-sm-6">
                  <div className="item service-item highlight-on-hover">
                    <img src={img1} alt="Application Development" className="bg-img shadow" />
                    <div className="service-content">
                      <span className="icon feature_box_col_one"><i className="fa fa-desktop" /></span>
                      <h6>Website Development</h6>
                      {/* <p>We build responsive, user-friendly and high-performance websites</p> */}
                      {/* <button className="btn">Enquiry</button> */}
                    </div>
                  </div>
                </div>
              {/* We build responsive, user-friendly, and high-performance websites */}
                <div className="col-lg-6 col-sm-6 ">
                  <div className="item service-item highlight-on-hover">
                    <img src={img4} alt="Application Development" className="bg-img" />
                    <div className="service-content">
                      <span className="icon feature_box_col_two"><i className="fa fa-android" /></span>
                      <h6>Application Development</h6>
                      {/* <p>We craft intuitive, high-performance mobile applications...</p> */}
                      {/* <button className="btn">Enquiry</button> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="item service-item highlight-on-hover">
                    <img src={img2} alt="Application Development" className="bg-img" />
                    <div className="service-content">
                      <span className="icon feature_box_col_two"><i className="fa fa-laptop" /></span>
                      <h6>Software Development</h6>
                      {/* <p>We develop scalable, efficient, and customized software solutions</p> */}
                      {/* <button className="btn">Enquiry</button> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="item service-item highlight-on-hover">
                    <img src={img3} alt="Application Development" className="bg-img" />
                    <div className="service-content">
                      <span className="icon feature_box_col_two"><i className="fa fa-comment" /></span>
                      <h6>Digital Marketing</h6>
                      {/* <p>We craft data-driven digital marketing strategies to boost your online presence</p> */}
                    {/* <button className="btn">Enquiry</button> */}
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center mt-3">
                <button className="btn">Services</button>
                </div>
          </div>
        </div>
      </div>
    )
}
export default Services;
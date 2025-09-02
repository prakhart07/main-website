import { useNavigate } from 'react-router-dom';
import '../CSS/careers.css';
import img1 from '../images/generated-image (4).png'
import img2 from '../images/generated-image (5).png'
import img3 from '../images/generated-image (7).png'

function Expertise(){
  
  const Navigate=useNavigate();

  function onClickApply(){
    Navigate('/training');
  }
  function onClickJobs(){
    Navigate('/jobs');
  }
    return(
         <div className="pt-5 pb-5"style={{backgroundColor: '#f5f5f5'}}>
        <div className="container">
          <div className="row">
            <div className="section-head-1 col-sm-12" style={{textAlign: 'center'}}>
              <h4 style={{marginTop: '-5rem'}} id="portfolio"><span></span>opportunities</h4>
              <p>The objective of Genkaix is to enable a large number of youth to take up <br />industry-relevant skill training that will help them<br /> in securing a better livelihood.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
                  <div className="item service-item internship-card highlight-on-hover">
                    <img src={img1} alt="Internship" className="bg-img-card" />
                    <div className="heading-wrapper">
                    <h5 className="card-heading">Internship</h5>
                  </div>
                  <button className="btn enroll-btn" onClick={onClickJobs}>Apply</button>
                  </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                  <div className="item service-item internship-card highlight-on-hover">
                    <img src={img3} alt="Internship" className="bg-img-card" />
                    <div className="heading-wrapper">
                    <h5 className="card-heading">Placement Training</h5>
                  </div>
                  <button className="btn enroll-btn" onClick={onClickApply}>Apply</button>
                  </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                  <div className="item service-item internship-card highlight-on-hover">
                    <img src={img2} alt="Internship" className="bg-img-card" />
                    <div className="heading-wrapper">
                    <h5 className="card-heading">Upskill Programs</h5>
                  </div>
                  <button className="btn enroll-btn" onClick={onClickApply}>Apply</button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Expertise;
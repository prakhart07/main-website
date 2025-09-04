import { useMemo, useState } from 'react';
import '../CSS/careers.css';
import Expertise from './expertise';
import JobPage from './jobPage';
import NewsModal from './newsModal';



  

function Career(){



    return(
        <div>
        <section id="home" className="home">
          <h2>Careers</h2>
        </section>
        <NewsModal/>
        {/* <section id="career-heading" className="career-heading">
          <h1 className="heading">Career</h1>
          <p>Openings for Various Intern Positions. Apply Now!</p>
        </section> */}
        <Expertise></Expertise>

      </div>
    )
}
export default Career;
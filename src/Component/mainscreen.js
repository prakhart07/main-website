import '../CSS/style.css';
import Clients from './client';
import Contact from './contactUs';
import Counter from './counter';
import Expertise from './expertise';
import GetInTouch from './getInTouch';
import Home from './home';
import Services from './services';
import Testimonials from './testimonials';


function Mainscreen(){

    return(
      <>
      <Home></Home>
      <Counter></Counter>
      <Services></Services>
      {/* <Expertise></Expertise> */}
      <Contact></Contact>
      <Testimonials></Testimonials>
      <Clients></Clients>
      {/* <GetInTouch></GetInTouch> */}
      </>
    )
}
export default Mainscreen;
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
      <Clients></Clients>
      <Contact></Contact>
      <Testimonials></Testimonials>
      {/* <GetInTouch></GetInTouch> */}
      </>
    )
}
export default Mainscreen;
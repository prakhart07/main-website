import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import Home from './Component/home';
import Services from './Component/services';
import Counter from './Component/counter';
import Expertise from './Component/expertise';
import Contact from './Component/contactUs';
import GetInTouch from './Component/getInTouch';
import Footer from './Component/footer';
import Mainscreen from './Component/mainscreen';
import Career from './Component/career';
import SkillDevelopment from './Component/skillDevelopment';
import Jobs from './Component/jobs';
import ServicesPage from './Component/servicesPage';
import AboutUs from './Component/aboutUs';
import ScrollToTop from './Component/ScrollToTop';
import DbConnection from './API/dbConnection';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path='/' element={<Mainscreen/>}></Route>
          <Route path='*' element={<Mainscreen/>}></Route>
          <Route path='/home' element={<Mainscreen/>}></Route>
          <Route path='/career' element={<Career/>}></Route>
          <Route path='/training' element={<SkillDevelopment/>}></Route>
          <Route path='/contact' element={<GetInTouch/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/services' element={<ServicesPage/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          {/* <Route path='/db' element={<DbConnection/>}></Route> */}
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

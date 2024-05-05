import Navbar from './components/Navbar';

import './App.css';
import './index.css'
import HeroSection from './components/HeroSection';
import HeroSection1 from './components/HeroSection1';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App  w-full h-full bg-gray-950 ">
      <Navbar ></Navbar>
  
      {/* <UserButton >Get Started</UserButton> */}
      <Dashboard></Dashboard>
      <div className='border border-white mt-12'>
      <HeroSection/>
      </div>
     
      {/* <br /> */}
      {/* <hr /> */}
      <div className='border border-white'>
      <HeroSection1/>
      </div>

    <Footer></Footer>
     
    </div>
  );
}

export default App;

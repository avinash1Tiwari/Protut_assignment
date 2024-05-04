import Navbar from './components/Navbar';
import './App.css';
import './index.css'
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App  w-full h-full bg-neutral-950 ">
      <Navbar ></Navbar>
      {/* <UserButton >Get Started</UserButton> */}
      <Dashboard></Dashboard>
      <HeroSection/>
    </div>
  );
}

export default App;

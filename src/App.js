
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { About } from './pages/About';
import Rooms from './pages/Rooms';
import { Gallery } from './pages/Gallery';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact';
import { Features } from './pages/Features';
import Mainscripts from './scripts';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <div className="App">  
   
      <Mainscripts />
      <Navbar />
      <Home />
      <About />
    <Rooms />
    <Features />
    <Gallery />
    <Testimonial />
    <Contact />
    <Footer />
    
    

    </div>
  );
}

export default App;

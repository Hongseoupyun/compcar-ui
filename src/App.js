import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;

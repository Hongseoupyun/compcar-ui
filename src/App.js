import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Cardapp from './components/Card/Cardapp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cardapp/>
      <ContactUs/>
    </div>
  );
}

export default App;

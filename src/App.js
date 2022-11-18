import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cardapp from './components/Card/Cardapp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cardapp/>
      <Footer/>
    </div>
  );
}

export default App;

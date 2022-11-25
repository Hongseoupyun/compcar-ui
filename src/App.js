import './App.css';
import ContactUs from 'components/ContactUs/ContactUs';
import Navbar from 'components/Navbar/Navbar';
import Cardapp from 'components/Card/Cardapp';
import SearchPage from 'components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchPage />
      <Cardapp />
      <ContactUs />
    </div>
  );
}

export default App;

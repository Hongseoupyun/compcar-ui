import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import PopularCard from './components/Card/PopularCard';
import Button from './components/Card/Button';
import data from './data';
import cityData from './cityData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>hello</p>
      <div className="title">
        <h2 className="sub-title">The best deals</h2>
        <div className="sub-explain">Buy the car with the best deal we’ve found this week. </div>
        <div className="more-option">see more deals</div>
      </div>
      <div className="deal">
        {data.map (data=> (
        <Card 
          image={data.image}
          brand={data.brand}
          model={data.model}
          price={data.price}
          mileage={data.mileage}
        />
          ))}
      </div>
      
      <div className="title">
        <h2 className="sub-title">Most Popular Cars in Canada</h2>
        <Button/>
        <div className="more-option">View more cities</div>
      </div>
      <div className="deal">
        {cityData.map (cityData=> (
        <PopularCard 
          image={cityData.image}
          cityName={cityData.cityName}
          model1={cityData.model1}
          model2={cityData.model2}
          model3={cityData.model3}
        />
          ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

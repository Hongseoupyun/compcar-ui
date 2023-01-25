import "./App.css";
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
        </BrowserRouter>
      </div>
    </Fragment>
    
  );
}

export default App;

import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Cardapp from "./components/Card/CardApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Cardapp />
        <ContactUs />
        <Routes>
          <Route path="/" />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

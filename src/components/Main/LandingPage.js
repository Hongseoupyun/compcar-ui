import React from "react";
import ContactUs from "components/ContactUs/ContactUs";
import SearchPage from "components/SearchPage/SearchPage";
import Cardapp from "components/Card/CardApp";

function LandingPage() {
  return (
    <div className="landingPage">
      <SearchPage />
      <Cardapp />
      <ContactUs />
    </div>
  );
}

export default LandingPage;

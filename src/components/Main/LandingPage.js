import React from "react";
import ContactUs from "components/ContactUs/ContactUs";
import SearchPage from "components/SearchPage/SearchPage";
import Cardapp from "components/Card/Cardapp";

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
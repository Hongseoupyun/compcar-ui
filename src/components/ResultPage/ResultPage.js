import React from "react";
import { FaBookmark } from "react-icons/fa";
import SearchInputBar from "components/SearchPage/SearchInputBar";
import "./ResultPage.scss";
export default function ResultPage() {
  return (
    <div className="result--page">
      <SearchInputBar />
      <sction className="searched--car--section">
        <button>Back to main page</button>
        <div className="searched--car--info">
          <div className="searched--car--info--wrapper">
            <div className="searched--car--name">2020 Tesla Model S White</div>
            <div className="searched--car--favourite">
              <FaBookmark id="bookmark" />
            </div>
          </div>
          <div>
            <img alt="car--image" />
          </div>
        </div>

        <div></div>
      </sction>
      <section className="graph--section"></section>
    </div>
  );
}

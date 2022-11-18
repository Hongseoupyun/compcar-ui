import Navbar from "components/Navbar/Navbar.js";
import { render } from "@testing-library/react";
describe("Navbar", () => {
  it("renders correctly without crashing", () => {
    // render the component on virtual dom
    render(<Navbar />);
  });
});

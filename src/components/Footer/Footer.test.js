import Footer from "components/Footer/Footer.js";
import { render } from "@testing-library/react";
describe("Footer", () => {
  it("renders correctly without crashing", () => {
    // render the component on virtual dom
    render(<Footer />);
  });
});

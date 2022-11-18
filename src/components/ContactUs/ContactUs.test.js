import ContactUs from "./ContactUs";
import { render } from "@testing-library/react";
describe("ContactUs", () => {
  it("renders correctly without crashing", () => {
    // render the component on virtual dom
    render(<ContactUs />);
  });
});

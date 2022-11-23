import ContactUs from "./ContactUs";
import { render, screen } from "@testing-library/react";
describe("ContactUs", () => {
  it("renders correctly without crashing", () => {
    // render the component on virtual dom
    render(<ContactUs />);
    const contactUsPage = screen.getByTestId("contact-us-page");
    expect(contactUsPage).toBeInTheDocument;
  });
  it("contains 4 images", () => {
    render(<ContactUs />);
    const teamImg = screen.getAllByRole("img");
    expect(teamImg.length).toBe(4);
  });
 
  // it("modal pops up when button is clicked",()=>{

  // })
});

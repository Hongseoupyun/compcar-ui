import Navbar from "components/Navbar/Navbar.js";
import { render, screen } from "@testing-library/react";
describe("Navbar", () => {
  it("renders correctly without crashing", () => {
    // render the component on virtual dom
    render(<Navbar />);
    const navbarComponent = screen.getByTestId("navbar-div");
    expect(navbarComponent).toBeInTheDocument;
  });
  it("has logo",()=>{
    render(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument;
  })
  it("has 4 contents",()=>{
    render(<Navbar />);
    const contents = screen.getAllByTestId("content");
    expect(contents).toHaveLength(4);
  })
});

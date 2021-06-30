import React from "react";
import { shallow, configure } from "enzyme";
import Grid from "./index";
import DropdownNavigation from "../DropdownNavigation";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });
describe("Grid", () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<Grid alive={false} />)));

  it("Header should render a <nav>", () => {
    expect(wrapper.find("nav").length).toBeGreaterThanOrEqual(1);
  });

  it("Header should render the Dropdown Navigation Component", () => {
    expect(wrapper.containsMatchingElement(<DropdownNavigation />)).toEqual(
      true
    );
  });
});

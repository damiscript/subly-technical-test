import { shallow, configure } from "enzyme";
import DropdownNavigation from "./index";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
describe("Dropdown Navigation", () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<DropdownNavigation />)));
  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
  it("Dropdown Navigation Option should render a simple <div />", () => {
    const wrapper = shallow(<DropdownNavigation />);
    expect(wrapper.find("div").length).toBeGreaterThanOrEqual(1);
  });
});

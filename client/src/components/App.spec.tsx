import { shallow, configure } from "enzyme";
import App from "./App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });
describe("App", () => {
  let wrapper: any;
  beforeEach(() => (wrapper = shallow(<App />)));
  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
  //Check for the div within the app
  it("App should render a <div />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});

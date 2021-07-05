import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./index.css";

interface navLink {
  [key: string]: any;
}

type MyState = { toggleOptions: boolean };
type myProps = {
  title?: String;
  links?: Array<navLink>;
};

/**
 * Navigation options for the dropdown elements of the header
 */
class DropdownNavigation extends React.Component<myProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      toggleOptions: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  setOptions(value: boolean) {
    this.setState({ toggleOptions: value });
  }
  /**
   * Closes the current window if the user clicks outside the dropdown
   */
  handleClickOutside = (event: any) => {
    const domNode = ReactDOM.findDOMNode(this);
    if (
      this.state.toggleOptions === true &&
      (!domNode || !domNode.contains(event.target))
    ) {
      this.setOptions(false);
    }
  };
  /**
   * Displays the list of options when toggled
   */
  renderOptionsMenu() {
    if (!this.state.toggleOptions) {
      return false;
    }
    const renderLinks = this.props.links?.map((link, index) => {
      return (
        <Link to={link.to} key={index} className="option-link w-full">
          {link.title}
        </Link>
      );
    });
    return (
      <div className="options-dialogue overflow-y-scroll flex flex-col space-y-0.5 py-2 text-xs bg-white block shadow-xl text-gray-700 rounded text-sm px-2">
        {renderLinks}
      </div>
    );
  }
  render() {
    return (
      <div className="drop-down-navigation relative">
        <div
          className="cursor-pointer hover:bg-gray-300 py-0.5 px-1 rounded"
          onClick={() => {
            this.setOptions(true);
          }}
        >
          <div className="text-base flex items-center space-x-2">
            <p>{this.props.title}</p>{" "}
            <p className="font-semibold pb-1"> &#8964;</p>
          </div>
        </div>
        {this.renderOptionsMenu()}
      </div>
    );
  }
}

export default DropdownNavigation;

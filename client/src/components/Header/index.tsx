import React from "react";
import Modal from "../Modal";
import DropdownNavigation from "../DropdownNavigation";
import { Link } from "react-router-dom";

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { modalActive: false, modalLink: 0 };
  }
  /** Render the modal when active*/
  renderModal = () => {
    if (this.state.modalActive === false) {
      return null;
    } else {
      const content = this.state.modalLink === 0 ? "Login" : "Sign Up";
      return (
        <Modal
          title={this.renderModalTitle()}
          content={content}
          onDismiss={() => {
            this.setState({ modalActive: false });
          }}
          actions={null}
        />
      );
    }
  };
  /** Render the title section of the modal*/
  renderModalTitle = () => {
    const text = this.state.modalLink === 0 ? "Log In" : "Join";
    return (
      <div className="w-full py-2">
        <div className="modal-navigation text-base border-b flex pb-2 space-x-2">
          <button
            className={`${
              this.state.modalLink === 0 ? "active text-red-400" : ""
            } font-semibold`}
            onClick={() => {
              this.setState({ modalLink: 0 });
            }}
          >
            Login
          </button>
          <button
            className={`${
              this.state.modalLink === 1 ? "active text-red-400" : ""
            } font-semibold`}
            onClick={() => {
              this.setState({ modalLink: 1 });
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <nav className="header fixed top-0 w-full py-2 px-3 bg-white shadow-xl text-xl">
        {this.renderModal()}
        <div className="flex justify-between">
          {/* First Column */}
          <div className="flex header-column space-x-5 items-center">
            <Link to="/" className="relative">
              <p className="text-sm font-semibold">Subly</p>
            </Link>
          </div>
          {/* Second Column */}
          <div className="flex header-column space-x-2 items-center">
            <DropdownNavigation
              title="Users"
              links={[
                { title: "User List", to: "/users" },
                { title: "Create Users", to: "/users/add" }
              ]}
            />
            <DropdownNavigation
              title="Files"
              links={[
                { title: "File List", to: "/files" },
                { title: "Add File", to: "/files/add" }
              ]}
            />
            <button
              className="text-sm bg-secondary text-black rounded px-2 py-1.5 font-semibold"
              onClick={() => {
                this.setState({ modalActive: true, modalLink: 0 });
              }}
            >
              Log In
            </button>
            <button
              className="text-sm bg-red-400 text-black rounded px-2 py-1.5 font-semibold"
              onClick={() => {
                this.setState({ modalActive: true, modalLink: 1 });
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

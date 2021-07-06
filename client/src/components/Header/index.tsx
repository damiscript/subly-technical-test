import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import UserCreate from "../Users/UserCreate";
import DropdownNavigation from "../DropdownNavigation";
import { Link } from "react-router-dom";

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { modalActive: false };
  }
  /** Render the modal when active*/
  renderModal = () => {
    if (this.state.modalActive === false) {
      return null;
    } else {
      return (
        <Modal
          title={this.renderModalTitle()}
          content={<UserCreate />}
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
    const text = "Add User";
    return (
      <div className="w-full py-2">
        <div className="modal-navigation text-base border-b flex pb-2 space-x-2">
          <button
            className={`${
              this.state.modalLink === 1 ? "active text-indigo-400" : ""
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
          <div className="flex header-column space-x-2 items-center text-base">
            <Link to="/" className="relative">
              <p className="text-base">Dashboard</p>
            </Link>
            <DropdownNavigation
              title="Users"
              links={[{ title: "User List", to: "/users" }]}
            />
            <DropdownNavigation
              title="Files"
              links={[
                { title: "File List", to: "/files" },
                { title: "Add File", to: "/files/add" }
              ]}
            />
            <Button
              disabled={false}
              onClick={() => {
                this.setState({ modalActive: true, modalLink: 1 });
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

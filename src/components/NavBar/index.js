import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Segment, Menu } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: window.location.pathname };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/"
              name="Home"
              active={activeItem === "/"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/todo"
              name="todo app"
              active={activeItem === "/todo"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;

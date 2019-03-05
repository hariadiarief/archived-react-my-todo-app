import React from "react";
import { Image, Header } from "semantic-ui-react";

import Page from "../Page";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Page>
        <Image
          src="/assets/image/circular-arrow-clock.svg"
          className="rotate-center"
          size="small"
          centered
        />
        <Header as="h1" textAlign="center">
          Your Todo Apps
          <Header.Subheader>
            Manage your todo-list with todo-app
          </Header.Subheader>
        </Header>
      </Page>
    </div>
  );
};

export default Home;

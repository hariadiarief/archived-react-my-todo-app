import React from "react";
import { Container, Segment } from "semantic-ui-react";

import Navbar from "../NavBar";

const Page = props => (
  <Container>
    <Navbar />
    <Segment>
      <main>{props.children}</main>
    </Segment>
  </Container>
);

export default Page;

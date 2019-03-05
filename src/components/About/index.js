import React from "react";
import Particles from "react-particles-js";

import Page from "../Page";
import { Segment } from "semantic-ui-react";
import Typed from "react-typed";

// const About = () => {
//   return (
//     <Page>
//       <Particles />
//     </Page>
//   );
// };

// export default About;

class About extends React.Component {
  render() {
    return (
      <Page>
        <Segment className="gradientBackground">
          <Particles
            params={{
              particles: {
                number: {
                  value: 150,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                }
              }
            }}
          />
          <Typed
            className="text-marquee"
            strings={["WEB APPS", "GAME APPS", "IOS APPS"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </Segment>
      </Page>
    );
  }
}
export default About;

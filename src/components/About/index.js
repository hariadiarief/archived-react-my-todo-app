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
            className="partikel"
            params={{
              particles: {
                number: {
                  value: 250,
                  density: {
                    enable: true,
                    value_area: 1300
                  }
                }
              }
            }}
          />
          <div className="containerAbout">
            <div className="contentAbout">
              <Typed
                strings={["Masagus", "Hariadi", "Arief"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </div>
          </div>
        </Segment>
      </Page>
    );
  }
}
export default About;

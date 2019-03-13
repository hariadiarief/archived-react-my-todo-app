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
          {/*  */}
          <Particles
            className="partikel"
            params={{
              fps_limit: 28,
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 30,
                  opacity: 0.4
                },
                move: {
                  speed: 1
                },
                opacity: {
                  anim: {
                    enable: true,
                    opacity_min: 0.05,
                    speed: 2,
                    sync: false
                  },
                  value: 0.4
                }
              },
              polygon: {
                enable: true,
                scale: 0.5,
                type: "inline",
                move: {
                  radius: 10
                },
                // url: "/assets/image/3176784.svg",
                url: "/assets/image/small-deer.2a0425af.svg",
                inline: {
                  arrangement: "equidistant"
                },
                draw: {
                  enable: true,
                  stroke: {
                    color: "rgba(255, 255, 255, .2)"
                  }
                }
              },
              retina_detect: false,
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  }
                },
                modes: {
                  bubble: {
                    size: 6,
                    distance: 40
                  }
                }
              }
            }}
          />
          {/*  */}

          {/* <Particles
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
          /> */}
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

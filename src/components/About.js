import React from "react";
import ProjectTeam from "./ProjectTeam";
//import ProjectTeamClass from "./ProjectTeamClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ProjectTeam name="Aravinda" />
      {/* <ProjectTeamClass name="Aravinda" /> */}
    </div>
  );
};

export default About;

// export class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("parent constructor");
//     this.state = {
//       count: 1,
//     };
//   }

//   componentDidMount() {
//     console.log("parent componentDidMount");
//   }

//   componentDidUpdate() {
//     console.log("parent componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("parent componentWillUnmount");
//   }

//   render() {
//     console.log("parent render");
//     return (
//       <div>
//         <h1>About</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Increase Counter
//         </button>
//         <span>count is{this.state.count}</span>
//         <ProjectTeamClass name="Aravinda" />
//       </div>
//     );
//   }
// }

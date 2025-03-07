import React from "react";
import ProjectTeam from "./ProjectTeam";
import ProjectTeamClass from "./ProjectTeamClass";

// export const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <ProjectTeam name="Aravinda" />
//       <ProjectTeamClass name="Aravinda" />
//     </div>
//   );
// };

export class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <ProjectTeam name="Aravinda" />
        <ProjectTeamClass name="Aravinda" />
        <ProjectTeamClass name="Aravinda" />
      </div>
    );
  }
}

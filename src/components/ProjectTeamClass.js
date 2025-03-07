import React from "react";
import { DeeperChild } from "./DeeperChild";

class ProjectTeamClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    //this.name = props.name;
    this.state = {
      count1: 1,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    console.log("child render");
    const { count1 } = this.state;
    return (
      <div>
        <h1>Project Team</h1>
        {/* <h2>This project is done by {this.name}</h2> */}
        <h2>This project is done by {this.props.name}</h2>
        <button
          onClick={() => {
            this.setState({
              //count1: count1 + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count 1 Increase
        </button>
        <h3>{count1}</h3>
        <DeeperChild name="deeper child 1" />
        <DeeperChild name="deeper child 2" />
      </div>
    );
  }
}

export default ProjectTeamClass;

import React from "react";

class ProjectTeamClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    console.log("child render");
    return (
      <div>
        <h1>Project Team</h1>
        <h2>This project is done by {this.props.name}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase child count
        </button>
        <span>Child count{this.state.count}</span>
      </div>
    );
  }
}

export default ProjectTeamClass;

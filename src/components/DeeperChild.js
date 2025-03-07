import { Component } from "react";

export class DeeperChild extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "componentDidMount");
  }

  render() {
    console.log(this.props.name + "render");
    return <h3>{this.props.name}</h3>;
  }
}

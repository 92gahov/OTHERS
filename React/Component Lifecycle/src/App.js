import React from 'react';
import './App.css';
import Navigation from './Components/navigation';
import PageContent from './Components/page-content';
import Child from './Components/child';
import Mount from './Components/Mount';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Georgi"
    }
    console.log("constructor")
  }

  componentDidMount() {
    if (window.innerWidth < 700) {
      this.setState({ innerWidth: window.innerWidth })
    }
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate")
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount")
  }

  ChangeState() {
    this.setState({ name: "Gahov" })
  }

  unmountChild() {
    this.setState({ name: "" })
  }

  render() {
    console.log("render")
    if (this.state.name === "") {
      return (<div></div>)
    }
    return (
      <div className='App'>
        <Navigation />
        <PageContent />
        {this.state.name}
        <br></br>
        innerWidth: {this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.ChangeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
        <br></br>
        <br></br>
        <Mount />
      </div>
    )
  }
}

export default App;

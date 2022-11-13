import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        console.log("Constructor");
        super(props);

        this.state = {
            counter: 0,
        }

        this.increment = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        this.decrement = () => {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    componentDidMount() {
        console.log("Component Did Mount")
        console.log("------------------------")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component Did Update")
        console.log("------------------------")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
        console.log("------------------------")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update")
        if (this.state.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get Snapshot Before Update")
        return null
    }
  

    render() {
        console.log("Render", this.state.error)
        if (this.state.error) {
            return <div>We have encountered an error! {this.state.error.message}</div>
        }
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div>
                    Counter: {this.state.counter}
                </div>
            </div>
        );
    }
};

export default Counter; 
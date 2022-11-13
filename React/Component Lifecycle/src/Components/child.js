import React from 'react'

class Child extends React.Component {
    constructor() {
        super();
        console.log("child constructor")
    }

    componentDidMount() {
        console.log("child componentDidMount")
    }

    render() {
        console.log("child render")
        return (
            <div>
                child name: {this.props.name}
            </div>
        );
    }
};

export default Child;
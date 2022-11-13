import React from 'react'
import Counter from './Counter';

class Mount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mount: true,
            ignoreProp: 0
        }
    }

    mountCounter = () => {
        this.setState = ({
            mount: true
        })
    }

    unmountCounter = () => {
        this.setState = ({
            mount: false
        })
    }

    ignoreProp = () => {
        this.setState({
            ignoreProp: Math.random()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
                <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
                <button onClick={this.ignoreProp}>Ignore Prop</button>
                {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} /> : null}
            </div>
        );
    }
};

export default Mount;
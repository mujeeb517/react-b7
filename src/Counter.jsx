import React from 'react';

// props: input, immutable
// ui : output
// state : internal, mutable, object
// events
class Counter extends React.Component {

    state = {
        count: 0,
        loading: false
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    dec = () => {
        this.setState({
            count: this.state.count - 1,
        });
    }

    render() {
        return <div>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.inc}>++</button>
            <button onClick={this.dec}>--</button>
        </div>
    }
}

export default Counter;

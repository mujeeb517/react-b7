import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function AutoCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('incrementing....');
            setCount(count + 1);
        }, 1000);


        return () => {
            clearInterval(interval);
        };

    }, [count]);

    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         console.log('incrementing...');
    //         this.setState({
    //             count: this.state.count + 1
    //         });
    //     }, 1000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    return <div className="m-2">
        <h1 className="text-lg font-bold">Auto Counter</h1>
        <h1 className="text-lg font-bold">{count}</h1>
    </div>
}

export default AutoCounter;

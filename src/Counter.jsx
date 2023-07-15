// props: input, immutable
// ui : output
// state : internal, mutable, object
// events
// migration

import { useState } from "react";

// hooks
function Counter() {

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }

    return <div className="m-2">
        <h1 className="text-lg fond-semibold">Counter</h1>
        <h2 className="text-lg font-bold">{count}</h2>
        <button className="bg-orange-500 text-white p-1 m-2" onClick={inc}>++</button>
        <button className="bg-orange-500 text-white p-1 m-2" onClick={dec}>--</button>
    </div>
}

export default Counter;

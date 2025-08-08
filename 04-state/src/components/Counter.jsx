import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    const getColor = () => {
        if (count > 0) return "green";
        if (count < 0) return "red";
        return "black";
    };

    return (
        <div>
            <h1 style={{ color:getColor()}}>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+ add</button>
            <button onClick={() => setCount(count - 1)}>- minus</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    );
};

export default Counter;
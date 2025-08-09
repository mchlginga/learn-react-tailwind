/* import { useState } from "react";

function App () {
    const [count, setCount] = useState(0);
    const handleAdd = () => setCount(count + 1);

    return <button onClick={handleAdd}>Count: {count}</button>
};

export default App; */

import { useState } from "react";

function App () {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleAdd = () => setCount(count + 1);
    const handleMinus = () => setCount(count - 1);
    const handleNameChange = (e) => setName(e.target.value);
    const handleGreet = () => setMessage(`Hello, ${name || "Stranger"}! your count ${count}`);

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
            />

            <div>
                <button onClick={handleAdd}>+ Add</button>
                <button onClick={handleMinus}>- Minus</button>
                <button onClick={handleGreet}>Greet</button>
            </div>

            <p>{message}</p>

        </div>
    );
}

export default App;
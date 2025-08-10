import { useState, useEffect } from "react";

function App () {
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect( () => {
		const timer = setInterval( () => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count + 1)}>+ Add</button>
			<button onClick={() => setCount(count - 1)}>- Minus</button>

			<h2>Current Time: {time}</h2>
		</div>
	);

};

export default App;
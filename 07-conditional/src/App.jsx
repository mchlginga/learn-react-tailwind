/* import { useState } from "react";

function App () {
	const [isLoggedIn, setIsLoggedin] = useState(false);

	return (
		<div>
			{isLoggedIn ? (
				<h1>Welcome Back!</h1>
			) : (
				<h1>Please log in</h1>
			)}

			<button onClick={() => setIsLoggedin(!isLoggedIn)}>
				{isLoggedIn ? "Logout" : "Login"}
			</button>
		</div>
	);
};

export default App; */

import { useState } from "react";

function App () {
	const [isLoggedIn, setIsLoggedin] = useState(false);
	const [notifCount, setNotifCount] = useState(3);

	const handleLogin = () => setIsLoggedin(true);
	const handleLogout = () => setIsLoggedin(false);

	return (
		<div>
			{isLoggedIn ? (
				<>
					<h1>Welcome, kel!</h1>
					{notifCount > 0 && <p>You have {notifCount} notificiations.</p>}
					<button onClick={handleLogout}>Logout</button>
				</>
			) : (
				<>
					<h1>Please login.</h1>
					<button onClick={handleLogin}>Login</button>
				</>
			)}
		</div>
	);
};

export default App;
/* function App () {
    const name = "Kel";
    const date = new Date().toLocaleDateString();
    const favorites = ["coding", "read", "walk"];

    return (
        <>
            <h1 style={{ color: "blue", fontSize: "28px" }}>Hello, {name}!</h1>
            <p>Today is: {date}</p>

            <h2>My Favorites:</h2>
            <ul>
                {favorites.map( (item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}; */

function App () {
    const username = "kelkel";
    const hobbies = ["coding", "typing", "learning"];

    return (
        <>
            <h1 style={ {color: "blue", fontSize: "20px" }}>Hi, I'am {username}</h1>
            <h2>My hobbies:</h2>
            
            <ul>
                {hobbies.map( (item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <p>Total hobbies: {hobbies.length}</p>
        </>
    );
};

export default App;
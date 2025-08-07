import ProfileCard from "./components/profileCard";

function App () {
    return (
        <div>
            <h1>Profie Card</h1>

            <ProfileCard
                name = "kel"
                bio = "life is good"
                location = "central luzon"
                avatar = "🧃"
            />
            <ProfileCard
                name = "gelo"
                bio = "life is mid"
                location = "north luzon"
                avatar = "🧃🧃"
            />
            <ProfileCard
                name = "gings"
                bio = "life is bad"
                location = "south luzon"
                avatar = "🧃🧃🧃"
            />
        </div>
    );
};

export default App;
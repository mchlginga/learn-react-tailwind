
const ProfileCard = ({ name, bio, location, avatar }) => {
    return (
        <div>
            <div>{ avatar }</div>
            <h2>{ name }</h2>
            <p>{ bio }</p>
            <p>{ location }</p>
        </div>
    );
};

export default ProfileCard;

const SocialCard = ({ name, desc, img, btnText }) => {
    return (
        <div>
            <img
                src={img || "No image"}
                alt={name}
                style={{ borderRadius: "50%", width: "100px", height: "100pxs" }}
            />
            <h2>{ name || "Unkown User" }</h2>
            <p>{ desc || "No description provided" }</p>
            <button>{ btnText || "Click me" }</button>
        </div>
    );
};

export default SocialCard;
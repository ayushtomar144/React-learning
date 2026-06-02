import { useState } from "react";

export default function Like() {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

       return (
    <div style={{ fontSize: "40px", cursor: "pointer" }}>
        <p onClick={toggleLike}>
            {isLiked ? (
                <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
                <i className="fa-regular fa-heart" style={{ color: "gray" }}></i>
            )}
        </p>
    </div>
);
    
}
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";
import { toast } from 'react-toastify';
import './Card.css';

function Card({ eachCource }) {
    const [liked, setLiked] = useState(false);

    function clickHandler() {
        if (!liked) toast("Video is liked");
        else toast("Removed from liked!");
        setLiked(!liked);
    }

    return (
        <div className="card">

            <div className="card-img-box">
                <img 
                    src={eachCource.image.url} 
                    alt={eachCource.image.alt}
                    className="card-img"
                />
            </div>

            <div className="card-like-box">
                <button onClick={clickHandler} className="like-btn">
                    {liked ? <FcLike /> : <AiOutlineHeart />}
                </button>
            </div>

            <div className="card-info">
                <p className="card-title">{eachCource.title}</p>
                <p className="card-desc">{eachCource.description}...</p>
            </div>

        </div>
    );
}

export default Card;

import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            {/* Conditionally render the status badge */}
            {props.status && (
                <div className={`card-badge ${props.status.toLowerCase()}`}>
                    {props.status}
                </div>
            )}
            <div className="card--image-container">
                <img src={props.img} className="card--image" alt={props.title} />
            </div>
            <div className="card--stats">
                <img src={props.star} className="card--star" alt="Star" />
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

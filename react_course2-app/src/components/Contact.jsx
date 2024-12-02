import React from "react";
import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";

export default function Contact(props) {
    return (

        
        <div className="contact-card">
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} alt="Phone icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} alt="Mail icon" />
                <p>{props.email}</p>
            </div>
        </div>
    
    );
}

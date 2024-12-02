import React from "react"
import logoo from "../assets/Airbnb.png"
export default function Navbar() {
    return (
        <nav>
            <img src={logoo} className="nav--logo"/>
        </nav>
    )
}
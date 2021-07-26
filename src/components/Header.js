import React from 'react'
import {FaYoutube} from "react-icons/fa"

export default function Header() {
    return (
        <header>
        <div className="logo">
           <h4 className="logoTitle"> <FaYoutube  style={{fill:"red"}}/>YOUTUBE</h4>
            <h1>Welcome To Youtube-Clone</h1>
        </header>
    )
}

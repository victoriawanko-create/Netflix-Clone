import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search_icon.svg"
import bellIcon from "../../assets/bell_icon.svg"
import profileImg from "../../assets/profile_img.png"
import caretIcon from "../../assets/caret_icon.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
            <div className="navbar-right">
                <img src={searchIcon} alt="" className="icons" />
                <p>Children</p>
                <img src={bellIcon} alt="" className="icons" />
                <div className="navbar-profile"></div>
                <img src={profileImg} alt="" className="profile" />
                <img src={caretIcon} alt="" />
            </div>
        </div>
    )
}

export default Navbar
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const activeStyle = {color: "#F15B2A"};
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                {"Home"}
            </NavLink>
            {" | "}
            <NavLink to="/logs" activeStyle={activeStyle}>
                {"Logs"}
            </NavLink>
            {" | "}
            <NavLink to="/tasks" activeStyle={activeStyle}>
                {"Analyzer"}
            </NavLink>
            {" | "}
            <NavLink to="/results" activeStyle={activeStyle}>
                {"Results"}
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                {"About"}
            </NavLink>
        </nav>
    );
};

export default Header;

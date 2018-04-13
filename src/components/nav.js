import React from 'react';
import {NavLink} from 'react-router-dom';
import "./nav.css";

export default props =>{
    return (
        <ul className={"nav nav-tabs mt-3"}>
            <li className={"nav-item"}>
                <NavLink to="/" className={"nav-link"} activeClassName={"active selected"} exact>Welcome Dorks</NavLink>
            </li> 
            <li className={"nav-item"}>
                <NavLink to="/our-macarons" className={"nav-link"} activeClassName={"active selected"}>Our Macs</NavLink>
            </li>                      
            <li className={"nav-item"}>
                <NavLink to="/gifts-parties" className={"nav-link"} activeClassName={"active selected"}>Gifts AND PARTIES?</NavLink>
            </li>
            <li className={"nav-item"}>
                <NavLink to="/contact" className={"nav-link"} activeClassName={"active selected"}>Hit em up</NavLink>
            </li>
        </ul>
    )
}
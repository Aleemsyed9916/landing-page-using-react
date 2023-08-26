// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faBoltLightning, faFolder, faTableCells, faCalendar, faTowerBroadcast, faImagePortrait, faImages, faHeart, faImage, faHeartBroken, faCode, faCubesStacked, faBars, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
    return ( <
        div className = "sidebar" >
        <
        h1 className = "sidebar-heading" >
        <
        FontAwesomeIcon icon = { faHeartbeat }
        className = "heading-icon" / > emplovee <
        /h1> <
        div className = 'heading-icon' / >
        <
        ul className = "sidebar-list" >
        <
        li > < FontAwesomeIcon icon = { faCube }
        /> Dashboard</li >
        <
        li > < FontAwesomeIcon icon = { faBoltLightning }
        /> Performance</li >
        <
        li > < FontAwesomeIcon icon = { faFolder }
        /> My Documents</li >
        <
        li > < FontAwesomeIcon icon = { faTableCells }
        /> Time off</li >
        <
        li > < FontAwesomeIcon icon = { faCalendar }
        /> Calendar</li >
        <
        li > < FontAwesomeIcon icon = { faTowerBroadcast }
        /> Team</li >
        <
        li > < FontAwesomeIcon icon = { faImage }
        /> Feedback</li >
        <
        h1 className = "sidebar-bottom" > Mick Gordon < /h1>  < /
        ul > < /
        div >
    );
};

export default Sidebar;
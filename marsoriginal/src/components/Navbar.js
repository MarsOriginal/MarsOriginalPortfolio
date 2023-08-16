import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../assets/mologo500.png'
import Reorder from '@material-ui/icons/Reorder';

function Navbar() {
    const [expand, setExpand] = React.useState(false);
    const location = useLocation();

    // run when location changes
    useEffect(() => {
        setExpand(false);
    }, [location]);
  return (
    <div className="navbar" id={expand ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => setExpand(((prev) => !prev))}> <Reorder/> </button>
        </div>
        <img src={logo} alt="logo" className="logo"/>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar
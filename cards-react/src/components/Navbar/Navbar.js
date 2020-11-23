import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li style={{float: "right"}}><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}
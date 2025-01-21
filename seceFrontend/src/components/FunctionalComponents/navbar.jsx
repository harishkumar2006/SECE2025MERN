import { Link } from "react-router-dom"
import "../../css/Navbar.css"
const Navbar = () => {
    return(
        <header>
          <nav>
            <ul>
                <li><Link to='/' classname="link">Home</Link></li>
                <li><Link to='/about' classname="link">About</Link></li>
                <li><Link to='/gallery' classname="link">Gallery</Link></li>
                <li><Link to='/contact' classname="link">Contact</Link></li>
            </ul>
          </nav>
        </header>
    )
}

export default Navbar

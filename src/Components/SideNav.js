import { Link } from 'react-router-dom'
import { FaCreativeCommonsBy, FaLinkedinIn, FaHammer, FaRegCommentDots } from 'react-icons/fa'

function SideNav(props) {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="linkitem">
                    <img className="navimg" src="https://i.imgur.com/KKKqqVW.png" alt="" />
                    <div className="navtext">Home</div>
                </div>
            </Link>
            <Link to="/about" style={{textDecoration:"none"}}>
                <div className="linkitem">
                    <FaCreativeCommonsBy className="navitem" />
                    <div className="navtext">About</div>
                </div>
            </Link>
            <Link to="projects" style={{textDecoration:"none"}}>
                <div className="linkitem">
                    <FaHammer className="navitem" />
                    <div className="navtext">Projects</div>
                </div>
            </Link>
            <Link to="contact" style={{textDecoration:"none"}}>
                <div className="linkitem">
                    <FaRegCommentDots className="navitem" />
                    <div className="navtext">Contact</div>
                </div>
            </Link>
            <a href="https://www.linkedin.com/in/garrett-dunlap-4b584a209/" style={{textDecoration:"none"}}>
                <div className="linkitem">
                    <FaLinkedinIn className="navitem" />
                    <div className="navtext">LinkedIn</div>
                </div>
            </a>
        </div>
    )
}

export default SideNav
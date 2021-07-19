import { Link } from "react-router-dom"

function Header(props){
    return (
      <div className="nav">
        <Link to="/projects" className="navitem">
          <div>Projects</div>
        </Link>
        <Link to="/about" className="navitem">
          <div>About Me</div>
        </Link>
        <Link to="/" className="navitem">
          <div>&lt;GD&gt;</div>
        </Link>
        <Link to="/contact" className="navitem">
          <div>Contact</div>
        </Link>
        <a href="https://www.linkedin.com/in/garrett-dunlap-4b584a209/" className="navitem">
          <div>LinkedIn</div>
        </a>
      </div>
    )
  } 
  
  export default Header
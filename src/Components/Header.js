import { Link } from "react-router-dom"

function Header(props){
    return (
      <div className="nav">
        <Link to="/" className="navitem">
          <div>Home</div>
        </Link>
        <Link to="/projects" className="navitem">
          <div>Projects</div>
        </Link>
        <Link to="/about" className="navitem">
          <div>About Me</div>
        </Link>
        <a href="https://www.linkedin.com/in/garrett-dunlap-4b584a209/" className="navitem">
          <div>LinkedIn</div>
        </a>
      </div>
    )
  } 
  
  export default Header
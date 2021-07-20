import { FaMailBulk, FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";

function About(props){
    return (
        <div className="container contact">
            <div className="twelve columns"><h2>Please feel free to connect with me about any questions, comments, or work inquiries! </h2></div>
            <div className="twelve columns contactitem">
                <FaMailBulk className="contacticon" />
                <div className="link"><a href="mailto: gedunlap1@outlook.com">Email Me *</a></div>
            </div>
            <div className="twelve columns contactitem">
                <FaLinkedin className="contacticon" />
                <div className="link"><a href="https://www.linkedin.com/in/garrett-dunlap-4b584a209/">Find me on LinkedIn</a></div>
            </div>
            <div className="twelve columns contactitem">
                <FaGithub className="contacticon" />
                <div className="link"><a href="https://github.com/gedunlap">Take a look at my Github</a></div>
            </div>
            <div className="twelve columns contactitem">
                <FaInstagramSquare className="contacticon" />
                <div className="link"><a href="https://www.instagram.com/garrettishllywd/">Check out my Instagram</a></div> 
            </div>
            <p>* If email isn't connected - gedunlap1@outlook.com</p>
        </div>
    )
  } 
  
  export default About
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiUnitySmall } from "react-icons/di";
import { SiRails, SiPostgresql, SiCsharp } from "react-icons/si";




function Home(props){
    return (
        <div className="container home">
            <div className="row homestuff">
                <img className="six columns homeimg" src="https://i.imgur.com/H4Rh6gc.jpg" alt="" />
                <div className="six columns homeinfo">
                    <h2>Hello!</h2>
                    <h4>I'm Garrett, a software engineer with an emphasis on front end design, based in Central Florida.</h4>
                </div>
            </div>
            <div className="twelve columns skills"><h2>Skills</h2></div>
            <div className="row iconrow">
                <div className="two columns skillicon">
                    <FaHtml5 />
                    <p>HTML</p>
                </div>
                <div className="two columns skillicon">
                    <FaCss3Alt />
                    <p>CSS</p>
                </div>
                <div className="two columns skillicon">
                    <IoLogoJavascript />
                    <p>Javascript</p>
                </div>
                <div className="two columns skillicon">
                    <FaReact />
                    <p>React</p>
                </div>
                <div className="two columns skillicon">
                    <SiCsharp />
                    <p>C #</p>
                </div>
                <div className="two columns skillicon">
                    <FaNodeJs />
                    <p>Express</p>
                </div>
            </div>
            <div className="row iconrow">
                <div className="two columns skillicon">
                    <SiRails />
                    <p>RoR</p>
                </div>
                <div className="two columns skillicon">
                    <DiMongodb />
                    <p>MongoDb</p>
                </div>
                <div className="two columns skillicon">
                    <SiPostgresql />
                    <p>Postgresql</p>
                </div>
                <div className="two columns skillicon">
                    <FaGitAlt />
                    <p>Git</p>
                </div>
                <div className="two columns skillicon">
                    <FaGithub />
                    <p>Github</p>
                </div>
                <div className="two columns skillicon">
                    <DiUnitySmall />
                    <p>Unity</p>
                </div>
            </div>
        </div>
    )
  } 
  
  export default Home
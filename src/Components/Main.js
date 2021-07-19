import { Route, Switch } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"

function Main(props){
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="https://www.linkedin.com/in/garrett-dunlap-4b584a209/"/>
      </Switch>
    </main>
  )
} 
  
  export default Main
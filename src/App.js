import Header from "./Components/Header"
import Main from "./Components/Main"
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className="app">
      <Header/>
      <SideNav/>
      <div className="main">
        <Main/>
      </div>
    </div>
  )
}

export default App;

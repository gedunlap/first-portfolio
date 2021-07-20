import Main from "./Components/Main"
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className="app">
      <SideNav/>
      <div className="main">
        <Main/>
      </div>
    </div>
  )
}

export default App;

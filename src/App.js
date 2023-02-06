import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from "./components/Home"

function App() {
  return (
    <div className="App" id ="app">
      <div id="top-section">
      <h1 className="App-header">
        Game Reviews
      </h1>
      </div>
      <Routes>
        <Route path ="/" element = {<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

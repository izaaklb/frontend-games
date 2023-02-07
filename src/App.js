import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Nav from './components/Nav'
import Home from "./components/Home"
import Reviews from "./components/Reviews"

function App() {
  return (
    <div className="App" id ="app">
      <div id="top-section">
      <Header/>
      <Nav/>
      </div>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/:reviewId" element={<Home/>}/>
        <Route path ="/Reviews" element ={<Reviews/>}/>
      </Routes>
    </div>
  );
}

export default App;

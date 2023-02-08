import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Reviews from "./components/Reviews"
import Homepage from "./components/Homepage";
import Review from "./components/Review"

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
        <Route path ="/reviews" element={<Reviews/>}/>
        <Route path ="/reviews/:reviewId" element ={<Review/>}/>
      </Routes>
    </div>
  );
}

export default App;

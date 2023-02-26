import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Reviews from "./components/Reviews"
import Homepage from "./components/Homepage";
import Review from "./components/Review"
import SignIn from "./components/SignIn"

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Routes>
        <Route path ="/" element = {<Homepage/>}/>
        <Route path ="/reviews" element={<Reviews/>}/>
        <Route path ="/reviews/:reviewId" element ={<Review/>}/>
        <Route path ="/login" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;

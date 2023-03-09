import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Review from "./components/Review"
import SignIn from "./components/SignIn"
import Categories from "./components/Categories";
// import CategorisedReviews from "./components/CategorisedReviews";

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/reviews" element = {<Reviews/>}/>
        <Route path = "reviews/:category" element = {<Reviews/>} />
        <Route path ="/:reviewId" element ={<Review/>}/>
        <Route path ="/login" element={<SignIn/>}/>
        <Route path ="/categories" element={<Categories/>}/>
      </Routes>
    </div>
  );
}

export default App;

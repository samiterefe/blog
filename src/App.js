

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Posts from "./components/posts/Posts";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Signup from "./components/singup/Signup";

function App() {
  return (
<BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/posts" element={<Posts/>}></Route>
      <Route path="/about" element= {<About/>}></Route>
      <Route path= "/contact" element= {<Contact/>}></Route>
      <Route path="/login" element= {<Login/>}></Route>
      <Route path= "/signup" element= {<Signup/>}></Route>
    </Routes>
</BrowserRouter>
);

}

export default App;





<div className="App">
<Navbar/>
<Home/>
</div>
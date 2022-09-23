import "@fontsource/poppins";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Menu from "./Pages/Menu/Menu";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import GotoTop from "./Components/GoToTop/GotoTop";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer></Footer>
      <GotoTop></GotoTop>
    </div>
  );
}

export default App;

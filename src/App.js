import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage";
import FAQ from "./components/FAQ/FAQ";

function App() {
   return (
      <div className="App">
         <NavBar />
         <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/" element={<HomePage />} />
         </Routes>
      </div>
   );
}

export default App;

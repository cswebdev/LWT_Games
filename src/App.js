import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Navbar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage";
import FAQ from "./components/FAQ/FAQ";
import GetInvolvedPage from "./components/GetInvolvedPage/GetInvolvedPage";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <div className="App overflow-hidden">
         <NavBar />
         <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;

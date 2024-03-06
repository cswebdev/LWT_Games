import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Navbar/NavBar";

function App() {
   return (
      <div className="App">
         <NavBar />
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </div>
   );
}

export default App;

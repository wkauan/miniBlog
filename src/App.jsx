import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// CSS
import "./app.css";

// Pages
import { Home } from "./pages/home";
import { About } from "./pages/about";

// Components
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

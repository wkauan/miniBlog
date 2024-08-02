import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./app.css";

// Pages
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

// Components
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

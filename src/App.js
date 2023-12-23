import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Buy from "./pages/Buy/Buy";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/buy" element={<Buy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}

export default App;

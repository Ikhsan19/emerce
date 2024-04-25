import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Header from "./components/TestNavbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import History from "./pages/History";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

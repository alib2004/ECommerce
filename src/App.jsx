import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/404/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./pages/Product/Product";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </>
  );
}
export default App;

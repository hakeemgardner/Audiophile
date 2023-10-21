import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import Footer from "./components/Footer";
import XX99MarkIIHeadphonesProductDetailsPage from "./pages/XX99MarkIIHeadphonesProductDetailsPage";
import XX99MarkIHeadphonesProductDetailsPage from "./pages/XX99MarkIHeadphonesProductDetailsPage";
import XX59headphonesProductDetailsPage from "./pages/XX59headphonesProductDetailsPage";
import ZX9SPEAKERProductDetailsPage from "./pages/ZX9SPEAKERProductDetailsPage";
import ZX7SPEAKERProductDetailsPage from "./pages/ZX7SPEAKERProductDetailsPage";
import YX1WirelessEarphonesProductDetailsPage from "./pages/YX1WirelessEarphonesProductDetailsPage";
import Productslist from "./components/Productslist";
import Checkout from "./pages/Checkout";
import CartModal from "./components/CartModal";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);
  


  return (
    <div
      
    >
      <Navbar
        onCartButtonClick={handleCartOpen}
        onCartClose={handleCartClose}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Headphones" element={<Headphones />} />
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Earphones" element={<Earphones />} />
        <Route
          path="/XX99MarkIIHeadphonesProductDetailsPage"
          element={<XX99MarkIIHeadphonesProductDetailsPage />}
        />
        <Route
          path="/XX99MarkIHeadphonesProductDetailsPage"
          element={<XX99MarkIHeadphonesProductDetailsPage />}
        />
        <Route
          path="/XX59headphonesProductDetailsPage"
          element={<XX59headphonesProductDetailsPage />}
        />
        <Route
          path="/ZX9SPEAKERProductDetailsPage"
          element={<ZX9SPEAKERProductDetailsPage />}
        />
        <Route
          path="/ZX7SPEAKERProductDetailsPage"
          element={<ZX7SPEAKERProductDetailsPage />}
        />
        <Route
          path="/YX1WirelessEarphonesProductDetailsPage"
          element={<YX1WirelessEarphonesProductDetailsPage />}
        />
        <Route
          path="/products"
          element={<Productslist navigate={navigate} />}
        />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
     {isCartOpen && (
        <>
          {/* Dark overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40"
             onClick={(e) => {
    e.stopPropagation(); // Stop event propagation
    handleCartClose();
  }} // Close the cart modal when clicking the overlay
          />
          <CartModal open={isCartOpen} onClose={handleCartClose}/>
        </>
      )}
    </div>
  );
}

export default App;

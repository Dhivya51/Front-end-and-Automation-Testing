import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Candles from "./pages/Candles";
import Diffusers from "./pages/Diffusers";
import EssentialOils from "./pages/EssentialOils";
import RoomSprays from "./pages/RoomSprays";
import WaxMelts from "./pages/WaxMelts";
import GiftSets from "./pages/GiftSets";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import CustomerService from "./pages/CustomerService";
import BestSellers from "./pages/BestSellers";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/candles" element={<Candles />} />

        <Route path="/diffusers" element={<Diffusers />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/account" element={<Account />} />


<Route path="/customer-service" element={<CustomerService />} />

<Route path="/best-sellers" element={<BestSellers />} />
<Route path="/essential-oils" element={<EssentialOils />} />

<Route path="/room-sprays" element={<RoomSprays />} />

<Route path="/gift-sets" element={<GiftSets />} />
<Route path="/wax-melts" element={<WaxMelts />} />
<Route path="/product-details" element={<ProductDetails />} />


        
        

        <Route path="/cart" element={<Cart />} />
        <Route
  path="/product-details"
  element={<ProductDetails />}
/>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
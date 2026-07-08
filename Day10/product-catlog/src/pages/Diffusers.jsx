import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Diffusers.css";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Diffusers() {
  const [search, setSearch] = useState("");
const [sort, setSort] = useState("");
const { addToWishlist } = useContext(WishlistContext);
const { addToCart } = useContext(CartContext);
const navigate = useNavigate();
  const diffusers = [
    {
      id: 1,
      name: "Classic Wooden Diffuser",
      price: "₹1,499",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.57QObErPcZ10HsYj4-7j0gAAAA?pid=Api&h=220&P=0",
    },
    {
      id: 2,
      name: "Ultrasonic Aroma Diffuser",
      price: "₹1,799",
      rating: "⭐⭐⭐⭐",
      image: "https://i5.walmartimages.com/seo/Homedics-Ellia-Gather-Ultrasonic-Aroma-Diffuser-with-Soothing-Sounds_5eb16ee8-2965-43aa-8f6c-6860f9977a93.0f111022fa45bebe3ee112e895050360.jpeg",
    },
    {
      id: 3,
      name: "Ceramic Essential Oil Diffuser",
      price: "₹2,199",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/71AfYTZo4PL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      name: "Glass Mist Diffuser",
      price: "₹2,499",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.siRj-0yWEwiBjUf-A_1anAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 5,
      name: "USB Mini Diffuser",
      price: "₹999",
      rating: "⭐⭐⭐⭐",
      image: "https://store.naturalelements.com.my/cdn/shop/files/usbdiffuser-03copy_4500x.png?v=1700035797",
    },
    {
      id: 6,
      name: "Bamboo Aroma Diffuser",
      price: "₹1,699",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://image.made-in-china.com/2f0j00GPgkfcaJaRoO/100ml-Recycled-Bamboo-Fiber-Ultrasonic-Aroma-Diffuser-Scent-Diffuser.jpg",
    },
    {
      id: 7,
      name: "Smart LED Diffuser",
      price: "₹2,799",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://aromaoildiffusersblog.com/wp-content/uploads/2025/01/bluetooth_aroma_diffusers_selection.jpg",
    },
    {
      id: 8,
      name: "Marble Finish Diffuser",
      price: "₹2,399",
      rating: "⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.oagOZtzQoV3Vhu0PrpZT-gHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 9,
      name: "Portable Aroma Diffuser",
      price: "₹1,299",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.LLi4GyyJLglxSkDObSv2XgHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 10,
      name: "Luxury Reed Diffuser",
      price: "₹1,999",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse1.mm.bing.net/th/id/OIP.OX6KLYy3kNnaF0rqBH0SfwHaHa?pid=Api&h=220&P=0",
    },
    {
  id: 11,
  name: "Crystal Glass Diffuser",
  price: "₹2,299",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://www.scent-land.com/wp-content/uploads/2024/06/K9-Crystal-Diffuser-Bottles-8-768x768.jpg",
},
{
  id: 12,
  name: "Floral Ceramic Diffuser",
  price: "₹1,899",
  rating: "⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.GDxp1CEDEz7jrIJ9XQbBXwHaHa?pid=Api&h=220&P=0",
},
{
  id: 13,
  name: "Moonlight Aroma Diffuser",
  price: "₹2,599",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.kj7vouhVjy5aZv3jCCvWFgHaHa?pid=Api&h=220&P=0",
},
{
  id: 14,
  name: "Vintage Wooden Diffuser",
  price: "₹1,799",
  rating: "⭐⭐⭐⭐",
  image: "https://tse4.mm.bing.net/th/id/OIP.9ZU3rr_z6IKPrui3fOKO4gHaHa?pid=Api&h=220&P=0",
},
{
  id: 15,
  name: "Rainbow LED Diffuser",
  price: "₹2,999",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse4.mm.bing.net/th/id/OIP.X9QLbgx5hc3qphvcKIlPxgHaHa?pid=Api&h=220&P=0",
},
{
  id: 16,
  name: "Mini Travel Diffuser",
  price: "₹1,199",
  rating: "⭐⭐⭐⭐",
  image: "https://aromatherapynaturals.com/wp-content/uploads/2023/09/what-is-the-right-size-of-aromatherapy-diffuser_808.png",
},
{
  id: 17,
  name: "Modern Stone Diffuser",
  price: "₹2,499",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://i.etsystatic.com/24053184/c/2250/2250/0/750/il/f73e89/4299240533/il_800x800.4299240533_d0l2.jpg",
},
{
  id: 18,
  name: "Luxury Gold Diffuser",
  price: "₹3,299",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://aromaoildiffusersblog.com/wp-content/uploads/2025/09/luxury_diffuser_lamp_combos_wnlju.jpg",
},
{
  id: 19,
  name: "Natural Bamboo Diffuser",
  price: "₹1,699",
  rating: "⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.1rhB4d9e-ezm2T4Vl6iIYQHaHa?pid=Api&h=220&P=0",
},
{
  id: 20,
  name: "Premium Marble Diffuser",
  price: "₹2,799",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.EZLZ22Y7xZO65h4G3pbQWwHaHa?pid=Api&h=220&P=0",
}
  ];
  let filteredProducts = diffusers.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);

if (sort === "low") {
  filteredProducts.sort(
    (a, b) =>
      Number(a.price.replace(/[₹,]/g, "")) -
      Number(b.price.replace(/[₹,]/g, ""))
  );
}

if (sort === "high") {
  filteredProducts.sort(
    (a, b) =>
      Number(b.price.replace(/[₹,]/g, "")) -
      Number(a.price.replace(/[₹,]/g, ""))
  );
}

if (sort === "az") {
  filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

 return (
  <>
    <Navbar />

    <div className="diffuser-page">

      <div className="banner">
        <h1>✨ Premium Diffusers</h1>
        <p>
          Discover elegant diffusers that fill your home with calming,
          long-lasting fragrance.
        </p>
      </div>

      

      <div className="top-controls">

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search Diffusers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="sort-box">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort Products</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="az">Name: A-Z</option>
          </select>
        </div>

      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
         <div className="product-card" key={product.id}>

  <div className="image-container">

    <button
  className="wishlist-icon"
  onClick={() => addToWishlist(product)}
>
  ❤
</button>

    <img
      src={product.image}
      alt={product.name}
    />

  </div>

  <h3>{product.name}</h3>

  <p className="rating">{product.rating}</p>

  <p className="price">{product.price}</p>

  <div className="buttons">

   <button
  className="view-btn"
  onClick={() =>
    navigate("/product-details", {
      state: { product },
    })
  }
>
  👁 View Details
</button>
    <button
  className="cart-btn"
  onClick={() => addToCart(product)}
>
  🛒 Add to Cart
</button>

  </div>

</div>
        ))}
      </div>

    </div>

    <Footer />
  </>
);
}
export default Diffusers;
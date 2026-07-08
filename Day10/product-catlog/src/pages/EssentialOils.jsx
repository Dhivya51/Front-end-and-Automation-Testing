import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./EssentialOils.css";
import { useState } from "react";

function EssentialOils() {
  const [search, setSearch] = useState("");
const [sort, setSort] = useState("");
  const essentialOils = [
    {
      id: 1,
      name: "Lavender Essential Oil",
      price: "₹499",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.MCSYpJAqiCDYVpQ6_H0ZhQHaEO?pid=Api&h=220&P=0",
    },
    {
      id: 2,
      name: "Tea Tree Essential Oil",
      price: "₹549",
      rating: "⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.8wRvW7zd2i0IiD2HbCXdgQHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 3,
      name: "Peppermint Essential Oil",
      price: "₹599",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.PDqqP5Hwy15wYMm8zg2YwwHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 4,
      name: "Lemon Essential Oil",
      price: "₹459",
      rating: "⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.Hr8-nEGuGKD495Q62x5MJQHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 5,
      name: "Rose Essential Oil",
      price: "₹699",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse1.mm.bing.net/th/id/OIP.wzoA-9ISw2nA51Hr9Mhh4QHaEP?pid=Api&h=220&P=0",
    },
    {
      id: 6,
      name: "Jasmine Essential Oil",
      price: "₹749",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.A7VgEblB5HEKZk1T3HdzkQHaFE?pid=Api&h=220&P=0",
    },
    {
      id: 7,
      name: "Sandalwood Essential Oil",
      price: "₹799",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.MQd5M9Tp98dJKyjK2PXt_gHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 8,
      name: "Orange Essential Oil",
      price: "₹489",
      rating: "⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.b4JQhRV4JqvUSgTC8LQQRQHaG2?pid=Api&h=220&P=0",
    },
    {
      id: 9,
      name: "Eucalyptus Essential Oil",
      price: "₹529",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.w8Rab4mdzA-Nw0LsbLO3wAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 10,
      name: "Chamomile Essential Oil",
      price: "₹629",
      rating: "⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.85xY3aU1HP70ai_IuyDC1QHaFj?pid=Api&h=220&P=0",
    },
    {
  id: 11,
  name: "Coconut Essential Oil",
  price: "₹549",
  rating: "⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.9EojlmcC9qeY6jBXK-B0mgHaHa?pid=Api&h=220&P=0",
},
{
  id: 12,
  name: "Green Tea Essential Oil",
  price: "₹499",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.Jkqkn57zIY3z_hZD6u8pQAHaHa?pid=Api&h=220&P=0",
},
{
  id: 13,
  name: "Ylang Ylang Essential Oil",
  price: "₹699",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.R6DOu790DNenQ-MsOj2m7AHaFP?pid=Api&h=220&P=0",
},
{
  id: 14,
  name: "Bergamot Essential Oil",
  price: "₹649",
  rating: "⭐⭐⭐⭐",
  image: "https://organicaromas.com/wp-content/uploads/2026/03/bergamot-essential-oil-benefits-featured-1400x795.jpg",
},
{
  id: 15,
  name: "Frankincense Essential Oil",
  price: "₹899",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse2.mm.bing.net/th/id/OIP.1Og-EwTgF02yu2tFQqjO3QHaEM?pid=Api&h=220&P=0",
},
{
  id: 16,
  name: "Cedarwood Essential Oil",
  price: "₹599",
  rating: "⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.V5BaKbQJwrZrysLpTl_FdgHaE5?pid=Api&h=220&P=0",
},
{
  id: 17,
  name: "Clove Essential Oil",
  price: "₹579",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse1.mm.bing.net/th/id/OIP.QGP-EvmZclPvnwHKtwGUdwHaHa?pid=Api&h=220&P=0",
},
{
  id: 18,
  name: "Lemongrass Essential Oil",
  price: "₹529",
  rating: "⭐⭐⭐⭐",
  image: "https://tse4.mm.bing.net/th/id/OIP.Fd3jWw9XJTs_Pv8kfcMyJwHaHa?pid=Api&h=220&P=0",
},
{
  id: 19,
  name: "Geranium Essential Oil",
  price: "₹749",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.XXJEPbO1h21Wxobv9xKjggHaHa?pid=Api&h=220&P=0",
},
{
  id: 20,
  name: "Patchouli Essential Oil",
  price: "₹799",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.F0XQLSA7Ox6VMWgw4gZnSwHaHa?pid=Api&h=220&P=0",
}
  ];
  let filteredProducts = essentialOils.filter((product) =>
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

    <div className="essential-page">

      <div className="banner">
        <h1>🌿 Premium Essential Oils</h1>
        <p>
          Discover pure essential oils that create a refreshing and relaxing atmosphere.
        </p>
      </div>

      

      <div className="top-controls">

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search Essential Oils..."
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

            <div className="image-box">

  <button className="heart-btn">
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

  <button className="view-btn">
    👁 View
  </button>

  <button className="cart-btn">
    Add to Cart
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

export default EssentialOils;
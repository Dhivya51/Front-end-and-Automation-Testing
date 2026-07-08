import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./RoomSprays.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function RoomSprays() {
  const roomSprays = [
    {
      id: 1,
      name: "Lavender Bliss",
      price: "₹499",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.J7ETtQ3UrtfxYb3kKMFi9AHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 2,
      name: "Vanilla Dream",
      price: "₹549",
      rating: "⭐⭐⭐⭐",
      image: "https://i.pinimg.com/736x/f7/93/8f/f7938ffd9ee2cad0dae674b718513e6d.jpg",
    },
    {
      id: 3,
      name: "Ocean Breeze",
      price: "₹599",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.4wgEgfyXaedEeK3stkShlAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 4,
      name: "Rose Garden",
      price: "₹479",
      rating: "⭐⭐⭐⭐",
      image: "https://vergelegen.co.za/wp-content/uploads/2025/03/88.png",
    },
    {
      id: 5,
      name: "Jasmine Bloom",
      price: "₹529",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://www.thevioletwick.com/cdn/shop/files/Jasmine_room_spray_by_The_Violet_Wick.jpg?v=1767669499",
    },
    {
      id: 6,
      name: "Fresh Lemon",
      price: "₹459",
      rating: "⭐⭐⭐⭐",
      image: "https://navoraperfumes.com/cdn/shop/files/Lemon-200.png?crop=center&height=1200&v=1756016520&width=1200",
    },
    {
      id: 7,
      name: "Sandalwood Mist",
      price: "₹649",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://homeescentials.com.au/cdn/shop/files/WhatsAppImage2025-07-28at09.00.19.jpg?v=1756130362",
    },
    {
      id: 8,
      name: "Mint Fresh",
      price: "₹489",
      rating: "⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.wqlnqlo6HCgqJUw04wpTqAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 9,
      name: "Cherry Blossom",
      price: "₹569",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.vsSrwwFl2HfwLshg-akqoAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 10,
      name: "White Musk",
      price: "₹699",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://heartandhomeusa.com/cdn/shop/files/00276740501-Cedarwood_WhiteMusk-LS.jpg?v=1702590508&width=1066",
    },
    {
  id: 11,
  name: "Coconut Paradise",
  price: "₹529",
  rating: "⭐⭐⭐⭐",
  image: "https://tse2.mm.bing.net/th/id/OIP.2PUB1rWp5wUO3bJ6LhSj9AHaHa?pid=Api&h=220&P=0",
},
{
  id: 12,
  name: "Green Tea Fresh",
  price: "₹499",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://images.urbndata.com/is/image/Anthropologie/94488079_237_b11?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=640",
},
{
  id: 13,
  name: "Peach Blossom",
  price: "₹559",
  rating: "⭐⭐⭐⭐",
  image: "https://www.candleemporium.co.uk/images/productbigzoom/W007PV.jpg",
},
{
  id: 14,
  name: "Coffee Aroma",
  price: "₹649",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://media.endclothing.com/media/catalog/product/T/h/The-Nue-Co-Function-Fragrance-Room-Spray---100ml---_5060506360461_m7_1.jpg",
},
{
  id: 15,
  name: "Apple Cinnamon",
  price: "₹579",
  rating: "⭐⭐⭐⭐",
  image: "https://cdn11.bigcommerce.com/s-gww51pkx8l/products/3488/images/5990/Apple_Cinnamon_Spray__34553.1725998621.386.513.jpg?c=2",
},
{
  id: 16,
  name: "Lotus Bloom",
  price: "₹539",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://awsmith.com.au/cdn/shop/files/6_ecoya-lifestyleimagery-roomsprays-2048x2560-_0007_EcoyaRoomSpray0227-lf.webp?v=1744609178&width=1445",
},
{
  id: 17,
  name: "Rain Forest",
  price: "₹619",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://www.bdivinearoma.com/wp-content/uploads/2019/11/Forest-Room-Spray-Lifestyle-2.jpg",
},
{
  id: 18,
  name: "French Lavender",
  price: "₹699",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://sensebycin.com/cdn/shop/files/IMG_1952.jpg?v=1719019502&width=1946",
},
{
  id: 19,
  name: "Berry Delight",
  price: "₹589",
  rating: "⭐⭐⭐⭐",
  image: "https://tse4.mm.bing.net/th/id/OIP.1edS5pDbZiahsrd9wJnfZwHaHZ?pid=Api&h=220&P=0",
},
{
  id: 20,
  name: "Royal Oud",
  price: "₹799",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse1.mm.bing.net/th/id/OIP.aXdDl1Zh2EdSmqvfM_64QQHaI0?pid=Api&h=220&P=0",
}
  ];
  const navigate = useNavigate();

const { addToCart } = useContext(CartContext);

const { addToWishlist } = useContext(WishlistContext);

  return (
    <>
      <Navbar />

      <div className="roomsprays-page">

        <div className="banner">
          <h1>🌸 Premium Room Sprays</h1>
          <p>
            Refresh every room with long-lasting fragrances that create a
            relaxing and luxurious atmosphere.
          </p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Room Sprays..."
          />
        </div>

        <div className="product-grid">
          {roomSprays.map((product) => (
            
            <div className="product-card" key={product.id}>
              <div className="image-container">

  <button
    className="wishlist-icon"
    onClick={() => addToWishlist(product)}
  >
    ❤️
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

export default RoomSprays;
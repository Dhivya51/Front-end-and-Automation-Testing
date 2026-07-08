import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./WaxMelts.css";

function WaxMelts() {
  const waxMelts = [
    {
      id: 1,
      name: "Lavender Wax Melts",
      price: "₹399",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://www.roanokecreek.com/wp-content/uploads/2021/07/Firefly-stack-of-lavender-colored-wax-cubes-in-front-of-lavender-and-incense-80112.jpg",
    },
    {
      id: 2,
      name: "Vanilla Cream Wax Melts",
      price: "₹449",
      rating: "⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.sqTChpmFEE9CygJUq6HV3gHaHI?pid=Api&h=220&P=0",
    },
    {
      id: 3,
      name: "Rose Garden Wax Melts",
      price: "₹479",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.cNF0EIsT7MvAWNwAkpfmjAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 4,
      name: "Ocean Breeze Wax Melts",
      price: "₹429",
      rating: "⭐⭐⭐⭐",
      image: "https://tse1.mm.bing.net/th/id/OIP.OvwHwCNGsFvqF8N7tUcE0gHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 5,
      name: "Jasmine Bloom Wax Melts",
      price: "₹499",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.Z_XjFmhpxCsomI4VzyNNVgHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 6,
      name: "Lemon Fresh Wax Melts",
      price: "₹389",
      rating: "⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.myH_khrNBztm00DJTtJ1JgHaGo?pid=Api&h=220&P=0",
    },
    {
      id: 7,
      name: "Coffee Aroma Wax Melts",
      price: "₹549",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://i.pinimg.com/736x/db/24/82/db2482970c4d427ec38eef6f07bb7840.jpg",
    },
    {
      id: 8,
      name: "Sandalwood Wax Melts",
      price: "₹599",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse3.mm.bing.net/th/id/OIP.Y5211ifsBLglSyINpKcVMAHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 9,
      name: "Cherry Blossom Wax Melts",
      price: "₹459",
      rating: "⭐⭐⭐⭐",
      image: "https://tse2.mm.bing.net/th/id/OIP.P93Zm4ybDhDJvlZ2f1jCngHaHa?pid=Api&h=220&P=0",
    },
    {
      id: 10,
      name: "White Musk Wax Melts",
      price: "₹649",
      rating: "⭐⭐⭐⭐⭐",
      image: "https://tse4.mm.bing.net/th/id/OIP.0iwWsoIxRXhjC7u5DzpkUQHaHa?pid=Api&h=220&P=0",
    },
    {
  id: 11,
  name: "Coconut Paradise Wax Melts",
  price: "₹429",
  rating: "⭐⭐⭐⭐",
  image: "https://tse4.mm.bing.net/th/id/OIP.WtQaggs4Eg2Uzmx5faGUBQHaHa?pid=Api&h=220&P=0",
},
{
  id: 12,
  name: "Green Tea Wax Melts",
  price: "₹449",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse2.mm.bing.net/th/id/OIP.fNAY4lV7XhopB2EyHblgTgHaE_?pid=Api&h=220&P=0",
},
{
  id: 13,
  name: "Peach Blossom Wax Melts",
  price: "₹479",
  rating: "⭐⭐⭐⭐",
  image: "https://tse2.mm.bing.net/th/id/OIP.eBBvrqS0lxE9W5GpqM5wZgHaJK?pid=Api&h=220&P=0",
},
{
  id: 14,
  name: "Apple Cinnamon Wax Melts",
  price: "₹499",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://i.etsystatic.com/52204088/r/il/46b854/7241463178/il_794xN.7241463178_gudl.jpg",
},
{
  id: 15,
  name: "French Lavender Wax Melts",
  price: "₹529",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://whipandwick.com/cdn/shop/files/8thImage_9_9bee23be-1339-4022-a89c-f704e673801a.jpg?v=1774071442",
},
{
  id: 16,
  name: "Berry Delight Wax Melts",
  price: "₹459",
  rating: "⭐⭐⭐⭐",
  image: "https://tse1.mm.bing.net/th/id/OIP.FPvgVM9OPLusLWFiFVGUSAHaHa?pid=Api&h=220&P=0",
},
{
  id: 17,
  name: "Lotus Bloom Wax Melts",
  price: "₹489",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.0b3iGor40B5Tk-RTBs_IOgHaHa?pid=Api&h=220&P=0",
},
{
  id: 18,
  name: "Rain Forest Wax Melts",
  price: "₹559",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse2.mm.bing.net/th/id/OIP.QWPi7nwKGkQ-ZmqFE6j8KAHaHa?pid=Api&h=220&P=0",
},
{
  id: 19,
  name: "Royal Oud Wax Melts",
  price: "₹699",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://tse2.mm.bing.net/th/id/OIP.kpq_4tsW2R7gyVICAfKKgQHaHa?pid=Api&h=220&P=0",
},
{
  id: 20,
  name: "Mint Fresh Wax Melts",
  price: "₹439",
  rating: "⭐⭐⭐⭐",
  image: "https://tse3.mm.bing.net/th/id/OIP.ja0t4q3f17ZhEmfsmSN0wQHaHa?pid=Api&h=220&P=0",
}
  ];

  return (
    <>
      <Navbar />

      <div className="wax-page">

        <div className="banner">
          <h1>🕯 Premium Wax Melts</h1>
          <p>
            Fill your home with long-lasting fragrances using our premium wax
            melts collection.
          </p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Wax Melts..."
          />
        </div>

        <div className="product-grid">
          {waxMelts.map((product) => (
            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p className="rating">{product.rating}</p>

              <p className="price">{product.price}</p>

              <div className="buttons">
                <button className="cart-btn">
                  Add to Cart
                </button>

                <button className="wish-btn">
                  ❤ Wishlist
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

export default WaxMelts;
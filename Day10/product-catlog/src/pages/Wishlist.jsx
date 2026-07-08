import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <>
      <Navbar />

      <div className="wishlist-page">
        <h1>❤️ My Wishlist</h1>

        {wishlist.length === 0 ? (
          <h2>Your wishlist is empty.</h2>
        ) : (
          wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h2>{item.name}</h2>
                <p>₹ {item.price}</p>
                <p>⭐ {item.rating}</p>

                <button onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;
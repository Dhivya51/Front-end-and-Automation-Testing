import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./GiftSets.css";

function GiftSets() {
  const giftSets = [
    {
      id: 1,
      name: "Relaxation Gift Box",
      price: "₹1,499",
      image: "https://i.etsystatic.com/54885242/r/il/28ad76/6520313979/il_800x800.6520313979_d1l7.jpg",
    },
    {
      id: 2,
      name: "Luxury Candle Collection",
      price: "₹1,999",
      image: "https://i.pinimg.com/originals/75/da/fd/75dafd1ae44fcab864961f9474ede025.jpg",
    },
    {
      id: 3,
      name: "Aromatherapy Kit",
      price: "₹2,299",
      image: "https://down-my.img.susercontent.com/file/cn-11134208-7r98o-lwfh9dexh63n8a",
    },
    
    {
      id: 4,
      name: "Spa Gift Hamper",
      price: "₹2,799",
      image: "https://www.yeahweddings.com/wp-content/uploads/2024/07/Spa-Gift-Basket.jpg",
    },
    {
  id: 5,
  name: "Luxury Home Fragrance Gift Box",
  price: "₹2,499",
  image: "https://tse2.mm.bing.net/th/id/OIP.3zRDxoeyjKI1LKbPqv4enQHaHa?pid=Api&h=220&P=0",
},
{
  id: 6,
  name: "Rose Gift Set",
  price: "₹999",
  image: "https://tse2.mm.bing.net/th/id/OIP.43SG4GmosU-abN9ovBNBLAHaHY?pid=Api&h=220&P=0",
},
{
  id: 7,
  name: "Essential Oils Collection",
  price: "₹2,199",
  image: "https://tse4.mm.bing.net/th/id/OIP.ckgS2kDTbzKIYY0JJfY-4QHaHX?pid=Api&h=220&P=0",
},
{
  id: 8,
  name: "Premium Reed Diffuser Gift Set",
  price: "₹2,699",
  image: "https://redhousearomas.co.uk/cdn/shop/files/candle-luxury-giftset.jpg?v=1720128997",
},
{
  id: 9,
  name: "Luxury Candle & Diffuser Combo",
  price: "₹2,999",
  image: "https://tse4.mm.bing.net/th/id/OIP.qzyJKueCH0rJS_6ZOl1zdQHaJQ?pid=Api&h=220&P=0",
},
{
  id: 10,
  name: "Festive Celebration Gift Hamper",
  price: "₹3,499",
  image: "https://tse4.mm.bing.net/th/id/OIP.ZrhwFHF4dV463IEZbVIQoQHaEK?pid=Api&h=220&P=0",
},
{
  id: 11,
  name: "Scented Candle Collection Box",
  price: "₹3,999",
  image: "https://tse2.mm.bing.net/th/id/OIP.x4o2lht_vFdMd0MEKc53PQHaHL?pid=Api&h=220&P=0",
},
{
  id: 12,
  name: "Luxury Fragrance Hamper",
  price: "₹3,299",
  image: "https://www.myza.co/cdn/shop/files/Personalised-Luxury-Hamper-_-Pilgrim-Fragrance-Shifa-Aromas-169847970.jpg?v=1771867254",
},
  ];

  return (
    <>
      <Navbar />

      <div className="gift-page">

        <div className="gift-banner">
          <h1>🎁 Premium Gift Sets</h1>
          <p>
            Surprise your loved ones with beautifully curated fragrance
            collections for every occasion.
          </p>
        </div>

        <div className="gift-grid">
          {giftSets.map((gift) => (
            <div className="gift-card" key={gift.id}>
              <img src={gift.image} alt={gift.name} />
              <h3>{gift.name}</h3>
              <p className="price">{gift.price}</p>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default GiftSets;
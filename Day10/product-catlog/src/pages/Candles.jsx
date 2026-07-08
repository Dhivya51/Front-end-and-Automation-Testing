import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductList from "../components/ProductList/ProductList";
import candles from "../data/candles";

function Candles() {
  return (
    <>
      <Navbar />

      <ProductList
  products={candles}
  
  bannerTitle="🕯️ Premium Candles"
  bannerText="Discover luxurious scented candles that create a warm, relaxing atmosphere and fill your home with elegant, long-lasting fragrance."
/>

      <Footer />
    </>
  );
}

export default Candles;
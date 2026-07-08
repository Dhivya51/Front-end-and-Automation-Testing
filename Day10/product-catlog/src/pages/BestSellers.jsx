import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function BestSellers() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Top Selling Products</h1>
        <p>Our most popular products will be displayed here.</p>
      </div>
      <Footer />
    </>
  );
}

export default BestSellers;
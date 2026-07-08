import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function CustomerService() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Customer Service</h1>
        <p>How can we help you today?</p>
      </div>
      <Footer />
    </>
  );
}

export default CustomerService;
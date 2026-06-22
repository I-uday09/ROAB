import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Band from "../components/Band";
import Products from "../components/Products";
import Email from "../components/Email";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Band />
      <Products />
      <Email />
      <Footer />
    </>
  );
}

export default Home;

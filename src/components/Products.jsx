import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://darkplanet.qzz.io/products"
      );

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-black px-4 md:px-10 py-20 border-t border-b border-gray-800">
      <div className="mb-16">
        <h2 className="text-lg sm:text-2xl md:text-4xl font-black uppercase">
          <span className="text-white">NEW</span>
          <span className="text-yellow-400 ml-2">ARRIVALS</span>
        </h2>
      </div>

      {products.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            No Products Available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
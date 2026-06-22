import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    setProducts(storedProducts);
  }, []);

  return (
    <section className="bg-black px-4 md:px-10 py-20 border-t border-b border-gray-800">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-black uppercase">
          <span className="text-white">NEW</span>
          <span className="text-yellow-400 ml-2">ARRIVALS</span>
        </h2>

        
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-400 text-lg">No Products Available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;

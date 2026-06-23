import { Link } from "react-router-dom";

function ProductCard({ product }) {
return ( <div
   className="
     
     rounded-lg
     overflow-hidden
     border
     border-gray-800
     hover:border-yellow-400
     transition-all
     duration-300
   "
 >
{/* Product Image */}
<Link to={`/item/${product.id}`}> <img
       src={product.images?.[0]}
       alt={product.name}
       className="w-full h-70 object-cover"
     /> </Link>


  {/* Product Details */}
  <div className="p-2">

    <h3 className="text-white text-xl font-bold mb-4">
      {product.name}
    </h3>

    <Link to={`/item?name=${encodeURIComponent(product.name)}`}>
      <button
        className="
          w-full
          h-10
          bg-yellow-400
          text-black
          font-semibold text-sm
          py-3
          rounded
          hover:bg-yellow-300
          transition
        "
      >
        ADD
      </button>
    </Link>

  </div>
</div>


);
}

export default ProductCard;

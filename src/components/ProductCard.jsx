import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      className="
        rounded-lg
        overflow-hidden
        border
        border-gray-800
        hover:border-yellow-400
        transition-all
        duration-300
        flex
        flex-col
        h-full
      "
    >
      {/* Product Image */}
      <Link to={`/item/${product.id}`}>
        <div className="h-44 md:h-64 lg:h-80 overflow-hidden">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-fill"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-3 flex flex-col flex-grow">
        <h3
          className="
            text-white
            text-sm
            md:text-lg
            font-bold
            mb-4
            min-h-[48px]
            md:min-h-[56px]
          "
        >
          {product.name}
        </h3>

        <Link to={`/item/${product.id}`} className="mt-auto">
          <button
            className="
              w-full
              h-10
              bg-yellow-400
              text-black
              font-semibold
              text-sm
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

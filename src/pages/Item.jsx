import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Item() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://darkplanet.qzz.io/products/${id}`);

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...product,
      size,
      color,
      quantity,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1000);

    setTimeout(() => {
      window.location.href = "/cart";
    }, 1000);
  };

  const buyNow = () => {
    window.location.href = "/checkout";
  };

  const submitReview = () => {
    if (!reviewName || !reviewText) {
      alert("Fill all fields");
      return;
    }

    const newReview = {
      name: reviewName,
      text: reviewText,
      rating,
    };

    const updatedReviews = [...reviews, newReview];

    setReviews(updatedReviews);

    localStorage.setItem(
      `reviews_${product.name}`,
      JSON.stringify(updatedReviews),
    );

    setReviewName("");
    setReviewText("");
    setRating(5);
  };
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="py-8 px-8">
        <p className="text-gray-500">
          Home / Shop /
          <span className="text-black font-medium ml-2">{product.name}</span>
        </p>
      </div>
      <div className="w-full h-px bg-gray-300 mb-8"></div>

      <div className="bg-white text-black min-h-screen px-8">
        {/* Main Product Section */}

        <div className="max-w-7xl mx-auto px-2 md:px-10 grid lg:grid-cols-4 gap-12">
          {/* Images */}
          <div className="lg:col-span-2">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-[100%] h-[550px] object-cover border border-gray-500 mx-auto"
            />

            <div className="flex gap-3 mt-4 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setCurrentImage(index)}
                  className={`w-24 h-24 object-cover mt-8 border border-gray-500 cursor-pointer  ${
                    currentImage === index ? "border-white" : "border-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details */}

          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold mt-6">{product.name}</h1>

            <p className="text-4xl text-yellow-500 font-bold mt-8">
              ₹{product.price}
            </p>

            <p className="text-gray-600 mt-2 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Size */}
            <div className="mt-8">
              <h3 className="text-md font-bold mb-3">Size</h3>

              <div className="flex gap-3">
                {["S", "M", "L", "XL", "XXL"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`px-5 py-3  border font-semibold transition ${
                      size === item
                        ? "bg-yellow-500 text-black border-black"
                        : "bg-white text-black border-gray-400 hover:border-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Color</h3>

              <div className="flex gap-4">
                <button
                  onClick={() => setColor("Black")}
                  className={`w-10 h-10 rounded-full bg-black border-2 ${
                    color === "Black" ? "border-white" : "border-gray-300"
                  }`}
                />

                <button
                  onClick={() => setColor("White")}
                  className={`w-10 h-10 rounded-full bg-white border-2 ${
                    color === "White" ? "border-green-500" : "border-gray-300"
                  }`}
                />

                <button
                  onClick={() => setColor("Yellow")}
                  className={`w-10 h-10 rounded-full bg-yellow-400 border-2 ${
                    color === "Yellow" ? "border-black" : "border-gray-300"
                  }`}
                />
              </div>
            </div>

            {/* Quantity */}

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Quantity</h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="border border-gray-400 px-4 py-2 "
                >
                  -
                </button>

                <span className="text-2xl border border-gray-400 px-4 py-1">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-400 px-4 py-2 "
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-col gap-4 mt-10">
              <button
                onClick={addToCart}
                className="
      w-full
      bg-yellow-400
      text-black
      py-4
      rounded-md
      font-bold
      hover:bg-yellow-300
      transition
    "
              >
                ADD TO CART
              </button>

              <button
                onClick={buyNow}
                className="
      w-full
      bg-black
      text-white
      py-4
      rounded-md
      font-bold
      hover:bg-gray-800
      transition
      mt-2
    "
              >
                BUY NOW
              </button>
            </div>

            <p className="font-semibold mt-4">
              Category:
              <span className="text-gray-600 ml-2">{product.category}</span>
            </p>
          </div>
        </div>
        <div className="mb-50"></div>
        <div className="mt-8 border-t border-gray-300 pt-6"></div>

        {showMessage && (
          <div
            className="
            fixed
            bottom-0
            left-0
            w-full
            bg-green-600
            text-white
            text-center
            py-4
            font-bold
            z-50
          "
          >
            Item Added Successfully ✓
          </div>
        )}
      </div>
    </>
  );
}

export default Item;

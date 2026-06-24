import { useState, useEffect } from "react";
import axios from "axios";

function AddProduct({ showPopup, setShowPopup }) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [colors, setColors] = useState(["#000000"]);
  const [newColor, setNewColor] = useState("#ffffff");
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const addColor = () => {
    if (!colors.includes(newColor)) {
      setColors([...colors, newColor]);
    }
  };

  const closePopup = () => {
    setCategory("");
    setName("");
    setPrice("");
    setOffer("");
    setDescription("");

    setImages([]);
    setImageUrls([]);
    setSelectedSizes([]);

    setColors(["#000000"]);

    setNewColor("#ffffff");

    setShowPopup(false);
  };

  const handleImages = async (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...previews].slice(0, 4));

    const uploadedUrls = [];

    for (const file of files) {
      try {
        const formData = new FormData();

        formData.append("file", file);

        const response = await axios.post(
          "https://darkplanet.qzz.io/upload-image",
          formData,
        );

        console.log("Upload Response:", response.data);

        if (response.data?.url) {
          uploadedUrls.push(response.data.url);
        }
      } catch (error) {
        console.log("Upload Error:", error);
      }
    }

    console.log("Uploaded URLs:", uploadedUrls);

    setImageUrls((prev) => {
      const updated = [...prev, ...uploadedUrls];

      console.log("New imageUrls:", updated);

      return updated;
    });
  };

  // const handleDrop = (e) => {
  //   e.preventDefault();

  //   const files = Array.from(e.dataTransfer.files);

  //   // const newImages = files.map((file) => URL.createObjectURL(file));

  //   //setImages((prev) => [...prev, ...newImages].slice(0, 4));
  // };

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };

  const saveProduct = async () => {
    console.log("imageUrls before save:", imageUrls);

    try {
      await axios.post("https://darkplanet.qzz.io/products", {
        category,
        name,
        price: Number(price),
        offer: Number(offer),
        description,
        sizes: selectedSizes,
        colors,
        images: imageUrls,
      });

      alert("Product Added Successfully");
      closePopup();
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  if (!showPopup) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/80
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
    bg-black
    border
    border-gray-700
    w-[95vw]
    md:w-[1250px]
    h-[95vh]
    md:h-[600px]
    max-w-[95vw]
    rounded-md
    overflow-hidden
    flex
    flex-col
  "
      >
        {/* Header */}
        <div
          className="
            flex
            justify-between
            items-center
            px-10
            py-1
            border-b
            border-gray-700
          "
        >
          <h2 className="text-1xl font-medium text-yellow-300">ADD PRODUCT</h2>

          <button
            onClick={closePopup}
            className="
              w-10
              h-10
              text-3xl
              
              text-yellow-300
              font-small
            "
          >
            ×
          </button>
        </div>

        {/*DownBOx */}
        <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">
          {/* Left Side */}
          <div className="w-full md:w-[65%] p-4 md:p-8 order-2 md:order-1">
            <h3 className="text-white font-semibold mb-6">PRODUCT DETAILS</h3>

            <div className="space-y-5">
              {/* Category + Product Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Category
                  </label>

                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter Category"
                    className="
          w-full
          bg-gray-900
          text-white
          border
          border-gray-700
          px-4
          py-3
          rounded-2xl
        "
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Product Name
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Product Name"
                    className="
          w-full
          bg-gray-900
          text-white
          border
          border-gray-700
          px-4
          py-3
          rounded-2xl
        "
                  />
                </div>
              </div>

              {/* Colors + Sizes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm mb-3">
                    Colors
                  </label>

                  <div className="flex items-center gap-3 flex-wrap">
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                    ))}

                    <input
                      type="color"
                      value={newColor}
                      onChange={(e) => setNewColor(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer"
                    />

                    <button
                      onClick={addColor}
                      className="
        w-8
        h-8
        rounded-full
        border-2
        border-yellow-400
        text-yellow-400
        flex
        items-center
        justify-center
      "
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-3">Sizes</label>

                  <div className="flex gap-2 flex-wrap">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 rounded ${
                          selectedSizes.includes(size)
                            ? "bg-yellow-400 text-black font-semibold"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price + Offer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">Price</label>

                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="₹ Enter Price"
                    className="
          w-full
          bg-gray-900
          text-white
          border
          border-gray-700
          px-4
          py-3
          
        "
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Offer %
                  </label>

                  <input
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    placeholder="Enter Offer Percentage"
                    className="
          w-full
          bg-gray-900
          text-white
          border
          border-gray-700
          px-4
          py-3
          
        "
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Product Description..."
                  className="
        w-full
        h-25
        bg-gray-900
        text-white
        border
        border-gray-700
        p-4
        rounded-2xl
        resize-none
      "
                />
              </div>
              <div className="flex md:hidden p-4 border-t border-gray-700">
                {/* Save button for mobile */}
                <button
                  onClick={saveProduct}
                  className="
      w-50
      bg-yellow-400
      text-black
      py-3
      rounded
      font-bold
      ml-45
    "
                >
                  SAVE PRODUCT
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[35%] p-4 flex flex-col order-1 md:order-2">
            <h3 className="text-white font-semibold mb-6">PRODUCT IMAGES</h3>

            {/* Upload Box */}
            <div
              // onDrop={handleDrop}
              // onDragOver={handleDragOver}
              className="
    h-45
    w-full
    border
    border-dashed
    border-yellow-300
    rounded-lg
    flex
    flex-col
    items-center
    justify-center
    cursor-pointer
    hover:bg-yellow-400/5
    transition
  "
            >
              <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImages}
                  className="hidden"
                />

                <div className="text-yellow-400 text-5xl font-light">+</div>

                <p className="text-gray-400 mt-3 text-sm">
                  Click Or Drag Images Here
                </p>

                <p className="text-gray-600 text-xs mt-1">JPG, PNG, WEBP</p>
              </label>
            </div>

            {/* Preview Images */}
            <div className="grid grid-cols-4 gap-3 mt-5 mb-8">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="
        h-25
        border
        border-gray-700
        bg-gray-900
        overflow-hidden
      "
                >
                  {images[index] && (
                    <img
                      src={images[index]}
                      alt=""
                      className="
            w-full
            h-full
            object-cover
          "
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Save Button for laptop*/}
            <button
              onClick={saveProduct}
              className="
    hidden
    md:block
    w-[70%]
    mt-6
    bg-yellow-400
    text-black
    py-3
    rounded
    font-bold
    hover:bg-yellow-300
    transition
    ml-18
  "
            >
              SAVE PRODUCT
            </button>
          </div>
          <div className="md:hidden p-4 border-t border-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

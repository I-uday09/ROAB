import logo from "../assets/logo.png";



function Footer() {
return ( 
<footer className="bg-gray-950 text-white border-t border-gray-800"> <div className="max-w-7xl mx-auto px-6 py-16">


    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

      {/* Logo Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-r md:border-gray-700 md:pr-8">

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">

          <img
            src={logo}
            alt="ROAB"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/20"
          />

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ROAB
          </h2>

        </div>

      </div>

      {/* Quick Links */}
      <div className="md:border-r md:border-gray-700 md:pr-8">

        <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
          Quick Links
        </h3>

        <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">

          <li>
            <a
              href="/"
              className="hover:text-yellow-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/cart"
              className="hover:text-yellow-400 transition"
            >
              Cart
            </a>
          </li>

          <li>
            <a
              href="/track"
              className="hover:text-yellow-400 transition"
            >
              Track Order
            </a>
          </li>

          <li>
            <a
              href="/manager"
              className="hover:text-yellow-400 transition"
            >
              Manager
            </a>
          </li>

        </ul>

      </div>

      {/* Policies */}
      <div className="md:border-r md:border-gray-700 md:pr-8">

        <h3 className="text-xl font-bold mb-4">
          Policies
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Privacy Policy
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Refund Policy
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Terms & Conditions
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Shipping Policy
          </li>

        </ul>

      </div>

      {/* Follow Us */}
      <div>

        <h3 className="text-xl font-bold mb-4">
          Follow Us
        </h3>

        <div className="flex gap-5">

          

        </div>

      </div>

    </div>
    

    {/* Bottom Footer */}
    <div className="mt-12 pt-6 text-center">

      <p className="text-gray-500 text-xs md:text-sm">
        © 2026 ROAB Fashion. All Rights Reserved.
      </p>

    </div>

  </div>
</footer>


);
}

export default Footer;

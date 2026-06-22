
import logo from "../assets/logo.png";

function Email() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-10 items-center gap-10">

        {/* Left Side */}
        <div className="md:col-span-4 flex justify-center">
          <img
            src={logo}
            alt="ROAB Logo"
            className="w-64 md:w-80 object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="md:col-span-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Become a</span>{" "}
            <span className="text-yellow-400">ROAB Explorer</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl">
            Get early access to new collections, styling guides,
            member-only offers, and invitations to exclusive ROAB events.
          </p>

          <div className="mt-8 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email address"
              className="
                w-full
                bg-zinc-900
                text-white
                border
                border-zinc-700
                rounded-md
                px-6
                py-4
                outline-none
                focus:border-yellow-400
              "
            />

            <button
              className="
                mt-4
                w-full
                bg-yellow-400
                text-black
                font-bold
                py-4
                rounded-md
                hover:bg-yellow-300
                transition
              "
            >
              Join Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Email;


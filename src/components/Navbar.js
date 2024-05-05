import { useEffect, useState } from "react";
import Product1 from "./Product1";

const Navbar = () => {
  const [isScoll, setisScorll] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        console.log("yes its woking");
        setisScorll(true);
      } else {
        setisScorll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbar = () => {
    setIsNavbar(!isNavbar);
  };
  return (
    <div
      className={`max-md:bg-transparent max-md:border-0 max-md:flex-col ${
        isScoll
          ? "sticky top-0 z-20 lg:rounded-full backdrop-blur-sm bg-[#ffffff0f] lg:scale-90 text-white "
          : "bg-gray-950"
      } transition-all duration-300  navbar flex  justify-between  mx-auto font-bold text-xl py-4 text-white px-6 shadow-md shadow-indigo-400 rounded`}
    >
      <div className="mt-3 ml-7 flex justify-between ">
        <h3 className="text-5xl">Protut</h3>
        <p
          className="bg-green-500 w-16 h-16 rounded-full text-center text-5xl lg:hidden"
          onClick={handleNavbar}
        >
          &times;
        </p>
      </div>
      
      <div
        className={`flex gap-12 justify-between ${
          isNavbar ? "visible" : "max-md:hidden"
        } max-md:flex-col`}
      >
        <div className="flex gap-8 mt-3 max-md:flex-col max-md:m-auto">
          <a href="https://www.facebook.com/">Home</a>
          <p>About</p>
          <Product1 />
        </div>
        <div className="flex gap-7 mb-1 max-md:flex-col max-md:m-auto">
          <p className="border border-black p-2 rounded-full">SignUp</p>
          <p className="border border-black p-2 rounded-full">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

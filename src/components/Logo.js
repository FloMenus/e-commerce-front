import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex align-center">
      <img
        src="https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_Emoji_Icon_4ab932f8-9ec9-4180-8420-c74b84546f57_large.png?v=1571606091"
        className="mr-3 h-6 sm:h-9 my-auto"
        alt="Flowbite Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        AdopteUnDev
      </span>
    </Link>
  );
};

export default Logo;

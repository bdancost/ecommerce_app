import { Armchair, Check } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">
        <div className="lg:container">
          <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
            <Check /> Free on all orders over $50
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

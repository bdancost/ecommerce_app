import { Link } from "react-router";
import { Armchair, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top"></div>

      <div className="footer_bottom mx-h-[343px] w-full border-t border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div>
            {/* logo wrapper */}
            <div className="logo_wrapper">
              <Link
                to="/"
                className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
              >
                {" "}
                <Armchair size="2rem" color="#029fae" /> Comforty
              </Link>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              beatae amet. Eius, recusandae earum obcaecati incidunt omnis
              deserunt distinctio nisi quaerat sapiente sit quidem, beatae
              numquam deleniti. Aliquid, at. Nisi?
            </p>
            <div className="footer_social">
              <Link className="p-4 rounded-full border-[#007580] inline-block border-[1px]">
                <Facebook size="1.5rem" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

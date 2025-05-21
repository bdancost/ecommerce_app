import { Link } from "react-router";
import { Armchair, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top mx-h-[343px] w-full border-t border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div>
              {/* logo wrapper */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                >
                  {" "}
                  <Armchair size="2rem" color="#029fae" /> Comforty
                </Link>
              </div>
              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                beatae amet. Eius, recusandae earum obcaecati incidunt omnis
                deserunt distinctio nisi quaerat sapiente sit quidem, beatae
                numquam deleniti. Aliquid, at. Nisi?
              </p>
              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                  <Facebook size="1.5rem" color="#007580" />{" "}
                </Link>
                <Link className="p-3 inline-block">
                  <Twitter size="1.5rem" color="#007580" />{" "}
                </Link>
                <Link className="p-3 inline-block">
                  <Instagram size="1.5rem" color="#007580" />{" "}
                </Link>
                <Link className="p-3 inline-block">
                  <Youtube size="1.5rem" color="#007580" />{" "}
                </Link>
              </div>
            </div>
            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                category
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>sofa</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>armchair</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>wing chair</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>desk chair</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>wooden chair</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>park bench</Link>
                </li>
              </ul>
            </div>

            <div className="footer_wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                support
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>help & supoort</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>tearms & condition</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>privacy policy</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal capitalize">
                  <Link>help</Link>
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                newsletter
              </h3>
              <form
                action="#"
                className="max-w-[424px] w-full flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="max-w-[260px] w-full h-[36px] border-[#e1e3e5] border-[1px] rounded-lg pl-2"
                />
                <button
                  type="submit"
                  className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div>
              <p className="text-base text-[#9a9caa] font-normal font-inter">
                {" "}
                &copy; 2025 Blogy - Designed & Develop{" "}
                <span className="text-[#272343]">Lifeonthecode</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

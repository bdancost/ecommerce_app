import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Best Furniture collection for your interior",
      subtitle: "welcome to chairs",
      image: "/assets/Banner/banner_image.png",
    },
    {
      id: 2,
      title: "Best Furniture collection for your interior",
      subtitle: "welcome to chairs",
      image: "/assets/Banner/banner_image.png",
    },
    {
      id: 3,
      title: "Best Furniture collection for your interior",
      subtitle: "welcome to chairs",
      image: "/assets/Banner/banner_image.png",
    },
    {
      id: 4,
      title: "Best Furniture collection for your interior",
      subtitle: "welcome to chairs",
      image: "/assets/Banner/banner_image.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:container">
      <div className="slider-container slider_container w-full max-w-[1400px] h-full mx-auto">
        <Slider {...settings}>
          {products?.map((product) => (
            <div key={product?.id} className="banner_slide_item">
              {/* banner text */}
              <div className="banner_text">
                <p className="text-sm font-inter text-[#272343] uppercase font-normal">
                  {product?.subtitle}
                </p>
                <h3 className="text-6xl font-inter text-[#272343] capitalize leading-16 max-w-[631px] w-full font-bold mb-5">
                  {product?.title}
                </h3>
                <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fae] rounded-lg text-white font-inter font-normal text-base capitalize cursor-pointer">
                  Shop Now <MoveRight />
                </button>
              </div>

              {/* banner image */}
              <div className="banner_image w-full h-full flex items-center justify-center">
                <img src={product?.image} alt={product?.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <SectionTitle
        title="What is client says about us"
        mb="mb-11"
        textAlign="center"
      />

      <div className="max-w-[1400px] slider-container features_slider w-full h-full">
        <Slider {...settings}>
          {clientSays?.map((client, index) => (
            <div key={index} className="p-4">
              <div className="feature_image mb-4 relative">
                <img
                  className="w-full h-full object-cover"
                  src={client?.image}
                  alt={client?.title}
                />
                {client?.status && (
                  <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                    <button className="text-sm font-inter font-normal">
                      {client?.status}
                    </button>
                  </div>
                )}
              </div>

              <div className="feature_content">
                <div className="flex items-center justify-between">
                  <h4 className="text-base text-[#007580] capitalize font-inter font-normal mb-4">
                    {client?.title}
                  </h4>
                  <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
                    <ShoppingCart size="1.5rem" color="#fff" />
                  </span>
                </div>
                <p className="text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter mb-4">
                  {client?.price}
                  {client?.currentPrice && (
                    <span className="text-sm text-[#9a9caa] font-inter font-normal">
                      {client?.currentPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;

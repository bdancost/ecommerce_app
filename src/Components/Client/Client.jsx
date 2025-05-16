import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      name: "John Doe",
      position: "CEO, Company",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="lg:container mx-auto">
      <SectionTitle
        title="What is client says about us"
        mb="mb-11"
        textAlign="center"
      />

      <div className="max-w-[1400px] slider-container w-full h-full">
        <Slider {...settings}>
          {clientSays?.map((client, index) => (
            <div key={index} className="p-12 border-[#e1e1e3] rounded-lg">
              <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description">
                {client?.description}
              </p>
              <div className="flex items-center">
                <h4>
                  <User size="4rem" />
                </h4>
                <div>
                  <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-1">
                    {client?.name}
                  </h4>
                  <p className="text-base text-[#9a9caa] font-inter font-normal">
                    {client?.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;

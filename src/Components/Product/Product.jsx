import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Product = () => {
  const [active, setActive] = useState({
    id: 0,
    product: "all",
  });

  const productTitle = [
    {
      id: 0,
      title: "all",
      product: "all",
    },
    {
      id: 1,
      title: "newest",
      product: "newest",
    },
    {
      id: 2,
      title: "trending",
      product: "trending",
    },
    {
      id: 3,
      title: "best seller",
      product: "best seller",
    },
  ];

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title={"our product"} textAlign={"center"} mb={"mb-5"} />

        <div className="flex items-center justify-center gap-6 mb-11">
          {productTitle?.map((title, index) => (
            <button
              key={title?.id}
              onClick={() =>
                setActive({
                  id: title?.id,
                  product: title?.product,
                })
              }
              className={`text-base font-black uppercase font-inter cursor-pointer ${
                active?.id === index ? "text-[#272343]" : "text-[#9a9caa]"
              }`}
            >
              {title?.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 items-center gap-6"></div>
    </div>
  );
};

export default Product;

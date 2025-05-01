import { Percent, Truck } from "lucide-react";

const Delivery = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-4">
        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Percent size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                Discount
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                Every week new sales
              </p>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper">
          <div className="flex items-center gap-4">
            <p>
              <Truck size="3rem" />
            </p>
            <div>
              <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">
                Free Delivery
              </h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">
                100% Free for all orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

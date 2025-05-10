import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";
import Brand from "../../Components/Brand/Brand";
import Features from "../../Components/Features/Features";
import Categories from "../../Components/Categories/Categories";
import Product from "../../Components/Product/Product";
import Client from "../../Components/Client/Client";

const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner />
      </div>

      {/* delivery component */}
      <div className="delivery_component w-full min-h-[#150px]">
        <Delivery />
      </div>

      {/* brand component */}
      <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
        <Brand />
      </div>

      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features />
      </div>

      {/* features categories */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Categories />
      </div>

      {/* product component */}
      <div className="w-full flex items-center justify-center pb-[80px]">
        <Product />
      </div>

      {/* client say component */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px]">
        <Client />
      </div>
    </div>
  );
};

export default Home;

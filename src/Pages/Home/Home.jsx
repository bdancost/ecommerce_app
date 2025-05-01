import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";
import Brand from "../../Components/Brand/Brand";

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
      <div className="brand flex items-center justify-center w-full mt-8 mb-8">
        <Brand />
      </div>
    </div>
  );
};

export default Home;

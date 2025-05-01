import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";

const Home = () => {
  return (
    <div>
      {/* banner component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner />
      </div>

      {/* delivery component */}
      <div className="w-full min-h-[#150px] bg-white shadow-md p-7">
        <Delivery />
      </div>
    </div>
  );
};

export default Home;

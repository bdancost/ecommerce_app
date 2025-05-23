import { Link } from "react-router";

const Register = () => {
  return (
    <div className="lg:container mx-auto p-[80px]">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
        <h3 className="text-3xl text-[#272343] font-semibold font-inter capitalize mb-5">
          Register
        </h3>
        <form
          action="#"
          className="flex flex-col items-center w-full space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name..."
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"
          />
          <input
            type="email"
            placeholder="Your Name..."
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"
          />
          <button
            type="submit"
            className="w-full h-[50px] bg-[#007580] rounded-lg pl-3.5"
          >
            Register
          </button>
        </form>
        <p>
          Don't have an account?<Link to={"/auth/login"}>Login</Link>
          {""}
        </p>
      </div>
    </div>
  );
};

export default Register;

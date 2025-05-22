import { Link } from "react-router";

const Register = () => {
  return (
    <div className="lg:container mx-auto p-[80px]">
      <div className="max-w-[648px] w-full min-h-[382px] p-[31px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
        <h3>Register</h3>
        <form action="#" className="">
          <input type="text" placeholder="Your Name..." />
          <input type="email" placeholder="Your Name..." />
          <button type="submit">Register</button>
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

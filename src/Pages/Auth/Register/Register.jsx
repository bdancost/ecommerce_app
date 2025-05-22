const Register = () => {
  return (
    <div className="lg:container mx-auto">
      <h3>Register</h3>

      <form action="#">
        <input type="text" placeholder="Your Name..." />
        <input type="email" placeholder="Your Name..." />
        <button type="submit">Register</button>
      </form>
      <p>
        Don't have an account?<Link to={"/auth/login"}>Login</Link>
        {""}
      </p>
    </div>
  );
};

export default Register;

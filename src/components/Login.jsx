import "../Styles/Login.css";

const Login = () => {
  return (
    <div className="Login_container">
      <h1>Sign In</h1>
      <form>
        <label for="username">Email address</label>
        <input type="text" placeholder="Enter email" required></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter password" required></input>
        <label>
          <input type="checkbox" className="Login_remember"></input> Remember me
        </label>
        <button type="Submit" className="Login_submit">
          Submit
        </button>
        <span class="Login_psw">
          Forgot <a href="placeholder">password?</a>
        </span>
      </form>
    </div>
  );
};

export default Login;

import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="FP_container">
      <h1>Recover your account</h1>
      <h3>insert your email address</h3>
      <form>
        <label for="username">Email address</label>
        <input type="text" placeholder="Enter email" required></input>
        <button type="Submit" className="FP_submit">
          Submit
        </button>
      </form>
      <button className="FP_return">Return</button>
    </div>
  );
};

export default ForgotPassword;

import '../Styles/FP.css';

const Forgot_Password = () => {
    return(
        <div className='FP_container'>
            <h1>Recover your account</h1>
            <h3>insert your email adress</h3>
            <form>
                <label for="username">Email adress</label>
                <input type="text" placeholder="Enter email" required></input>
                <button type='Submit' className='FP_submit'>Submit</button>
            </form>
            <button onclick="window.location.href = 'google,com';" className='FP_return'> Return  </button>
        </div>
    );
};

export default Forgot_Password;
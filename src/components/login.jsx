import logo from '/images/pinterest-seeklogo.svg';
const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 className="form-title">Welcome to Pinterest</h2>
            <form action="#" className="login-form">
                <div className="input-wrapper">
                    <label htmlFor="input-email">Email address</label> <br/>
                    <input type="email" placeholder="Email address" id="input-email"
                    className="input-email" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="input-pwd">Password</label> <br/>
                    <input type="password" placeholder="Create a password" id="input-pwd"
                    className="input-pwd" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="input-dob">Date of birth</label> <br/>
                    <input type="date" placeholder="dd.mm.yyyy" id="input-dob"
                    className="input-dob" required />
                </div>
                <button type="button" className="continue-button">Continue</button>
            </form>
        </div>
    )
}

export default Login
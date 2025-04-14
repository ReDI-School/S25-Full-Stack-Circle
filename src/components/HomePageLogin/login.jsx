import logo from '/images/pinterest_p.png';
import styles from '../HomePageLogin/login.module.css';
import GoogleButton from 'react-google-button';
const Login = () => {
    return (
        <div className={styles.login}>
        <div className={styles.signup}>
            <h2>Sign up to get your ideas</h2>
        </div>
        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="logo" />
            <h2 className={styles.title}>Welcome to Pinterest</h2>
            <h4>Find new ideas to try</h4>
            <form action="#" className={styles.form}>
                <div className={styles.wrapper}>
                    <label htmlFor="input-email">Email address</label> <br/>
                    <input type="email" placeholder="Email" id="input-email"
                    className="input-email" required />
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="input-pwd">Password</label> <br/>
                    <input type="password" placeholder="Create a password" id="input-pwd"
                    className="input-pwd" required />
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="input-dob">Birthdate</label> <br/>
                    <input type="date" placeholder="dd.mm.yyyy" id="input-dob"
                    className="input-dob" required />
                </div>
                <div className={styles.buttons}>
                    <button type="button" className={styles.continue}>Continue</button>
                    <h4>OR</h4>
                    <GoogleButton type="light" label="Continue with Google" 
                        onClick={() => { console.log('Google button clicked') }}
                    />                
                </div>
            </form>            
        </div>
        </div>
    )
}

export default Login
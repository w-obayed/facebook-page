import { Link } from "react-router-dom";
import Meta from "../../components/meta/Meta";
import "./Auth.scss";

const Auth = () => {
  return (
    <>
      <Meta title="facebook - login or signup" />
      <div className="fb-auth-area">
        <div className="fb-auth-container">
          <div className="fb-auth-left">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="fb-auth-right">
            <div className="fb-auth-box">
              <form action="">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="text" placeholder="Password" />
                <button className="login-btn">Log in</button>
              </form>
              <Link to="/">Forgotten password?</Link>
              <div className="divider"></div>
              <button className="create-btn">Create new account</button>
            </div>
            <p className="lg-text">
              <Link>Create a Page</Link> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

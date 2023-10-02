import { useState } from "react";
import Dashboard from "./Dashborad";
import { useNavigate } from "react-router-dom";
import './styles/Login.css'
const Login = () => {

  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  return (
    <div className="article-container">
      <div className="article1">
        <h3>LOGO</h3>
        <p>Board</p>
        <img className="images" src={require("./styles/Frame2.png")}></img>
      </div>
      <form onSubmit={handleSubmit} className="article">
        <div >
          <h1>Sign In</h1>
          < h4 className="heading">Sign in to your account</h4>
         <nav>
          <ul>
            <li>
            <img src={require('./styles/Google Sign In (2).png')}></img>
          <img src={require('./styles/Apple Sign In.png')} alt=""></img>
            </li>
          </ul>
         </nav>
        <div className="card">
          <label>Email address</label>        
           <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <p>Forgot Password?</p>
          <button type="submit" value="Submit">Sign in</button> 
          </div>
 
        </div>
        <p>Don’t have an account?<span> Register here</span></p>

      </form>
    </div>
  )
};

export default Login;

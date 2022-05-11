import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <label>ID</label>
        <input type="text" className="loginInput"></input>
        <label>PASSWARD</label>
        <input type="password" className="loginInput"></input>
        <button className="loginButton">Login</button>
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}

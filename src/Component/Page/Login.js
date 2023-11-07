import { useState } from "react";
import { user_api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { BG } from "../../assets/Constants/COLORS";
import { useAuth } from "../../context/authContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigateTo = useNavigate();
  const auth = useAuth();

  async function register(payload) {}
  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      username,
      password,
    };
    register(payload);
  };
  return (
    <div className={`conatiner text-center h-screen ${BG.bg} flex`}>
      <div className="my-auto mx-auto h-2/3 w-1/3 py-5 flex flex-col">
        <form onSubmit={handleSubmit} className="p-3 my-auto">
          <h1 className="mb-5 h1 text-white text-4xl">Login</h1>
          <div className="my-2 w-full h-1/3">
            <input
              type="text"
              className="w-full h-full rounded p-3"
              id="login-username"
              aria-describedby="login-username"
              placeholder="Enter Username "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <small id="login-username" hidden className="form-text text-muted">
              Error messages to be shown here
            </small>
          </div>
          <div className="my-2 w-full h-1/3">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-full rounded p-3"
              id="login-password"
              aria-describedby="login-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small id="login-password" hidden className="form-text text-muted">
              Error messages to be shown here
            </small>
          </div>
          <button type="submit" className="btn btn-primary px-5 py-2 mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

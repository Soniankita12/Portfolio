import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const Login = () => {
  const [user, setuser] = useState({ userName: "", password: "" });
  // const [dispatch,setdispatch] = useState(null);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/portfolio/admin-login", user);
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(hideLoading());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5 w-96 h-72 p-5 shadow  border-gray-500">
        <h1 className="text-center text-2xl text-blue-800 font-bold">
          Admin Login
        </h1>
        <hr />
        <input
          className="p-2 border"
          placeholder="Username"
          type="text"
          value={user.userName}
          onChange={(e) => setuser({ ...user, userName: e.target.value })}
        />
        <input
          className="p-2 border"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <button
          className="bg-blue-600 px-2 py-2 rounded-lg text-white"
          onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

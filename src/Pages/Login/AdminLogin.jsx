import React from "react";
import Header from "../../Components/Header";
import "./login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doLogin } from "../../Authentication/Auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const admin_url = "http://localhost:1424";
  const handle = (data) => {
    axios.post(`${admin_url}/auth/login`, data).then(
      (response) => {
        console.log(response);

        // const {accessToken,email}=response.data;
        // doLogin(accessToken,email,()=>{
        //     console.log("Login details")
        // })

        toast.success("Login Successfully !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log("sucess");

        const { accessToken } = response.data;
        localStorage.setItem("token", accessToken);

        navigate("/adminlanding");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Check email id/password", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    );
  };

  const handleError = (errors) => {};
  return (
    <div>
      <ToastContainer />
      <Header></Header>

      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>

          <form onSubmit={handleSubmit(handle, handleError)}>
            <h2 className="text-center">Admin Login</h2>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                required
                name="email"
                autoComplete="off"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                required
                name="password"
                autoComplete="off"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <br></br>
            <div className="form-group">
              <button
                className="btn btn-success btn-block "
                id="btnsub"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

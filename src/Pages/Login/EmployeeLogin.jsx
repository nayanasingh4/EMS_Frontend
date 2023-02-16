import React from "react";
import Header from "../../Components/Header";
import "./login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const employee_url = "http://localhost:2404";
  const handle = (data) => {
    axios.post(`${employee_url}/auth/login`, data).then(
      (response) => {
        console.log(response);
        toast.error("Login Successfully !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log("success");

        const { accessToken } = response.data;
        localStorage.setItem("token", accessToken);
        const jwt = localStorage.getItem("token");

        axios.interceptors.request.use(
          (config) => {
            config.headers.authorization = `Bearer ${jwt}`;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );

        //sub part
        const expiry = JSON.parse(atob(accessToken.split(".")[1])).sub;
        //split sub part in array
        var empid = expiry.split(",");
        //1st index
        console.log(empid[0]);
        var userId = empid[0];
        localStorage.setItem("userid", empid[0]);
        axios.get(`http://localhost:2404/employee/${userId}`).then(
          (response) => {
            console.log(response.data);
            localStorage.setItem("mid", response.data.managerId);
            localStorage.setItem("employeeName", response.data.employeeName);
            localStorage.setItem("emailId", response.data.emailId);
            localStorage.setItem("phoneNumber", response.data.phoneNumber);
          },
          (error) => {
            console.log(error);
          }
        );

        navigate("/employeehome");
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
            <h2 className="text-center">Employee Login</h2>
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

export default EmployeeLogin;

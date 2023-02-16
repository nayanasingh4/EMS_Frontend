import React from "react";
import Header from "../Components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../Components/Header1";
import Header2 from "../Components/Header2";

const EmployeeProfile = () => {
  const jwt = localStorage.getItem("token");
  const editprofile_url = "http://localhost:2404";
  // const authAxios=axios.create({

  //   Base_Url:editprofile_url,
  //   headers:{
  //     Authorization:`Bearer ${jwt}`,

  //   }
  // })

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handle = (data) => {
    console.log(data);
    axios
      .put(
        `${editprofile_url}/employee/update/${localStorage.getItem("userid")}`,
        data
      )
      .then(
        (response) => {
          console.log(response);
          alert("Employee Details Updated");

          navigate("/employeehome");
        },
        (error) => {
          console.log(error);
          console.log("error");
          toast.error("Fill the fields correctly", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
  };

  const handleError = (errors) => {};

  return (
    <div>
      <Header2></Header2>
      <div class="container">
        <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
          <form onSubmit={handleSubmit(handle, handleError)}>
            <h3 class="text-center">Edit Profile</h3>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label class="profile_details_text">Employee Name:</label>
                  <input
                    type="text"
                    name="first_name"
                    class="form-control"
                    value={localStorage.getItem("employeeName")}
                    {...register("employeeName")}
                    readOnly={true}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label class="profile_details_text">Manager Id:</label>
                  <input
                    type="text"
                    name="manager_Id"
                    class="form-control"
                    value={localStorage.getItem("mid")}
                    {...register("managerId")}
                    readOnly={true}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label class="profile_details_text">Email Address:</label>
                  <input
                    type="email"
                    name="emailId"
                    class="form-control"
                    defaultValue={localStorage.getItem("emailId")}
                    {...register("emailId")}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label class="profile_details_text">Mobile Number:</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    class="form-control"
                    defaultValue={localStorage.getItem("phoneNumber")}
                    {...register("phoneNumber")}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                <div class="form-group">
                  <input type="submit" class="btn btn-info" value="Submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;

import React from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddManager = () => {
  const jwt = localStorage.getItem("token");
  const addmanagers_url = "http://localhost:1424";
  const authAxios = axios.create({
    Base_Url: addmanagers_url,
    headers: {
      Authorization: `Bearer ${jwt}`,
      Expires: 60,
    },
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addemployee_url = "http://localhost:1424";
  const handle = (data) => {
    console.log(data);
    authAxios.post(`${addemployee_url}/manager`, data).then(
      (response) => {
        console.log(response);
        alert("Manager added successfully")
        toast.error("Added Manager !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log("Success");

        navigate("/adminlanding");
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
      <ToastContainer></ToastContainer>
      <Header></Header>
      <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register Manager
                      </p>

                      <form
                        class="mx-1 mx-md-4"
                        onSubmit={handleSubmit(handle, handleError)}
                      >
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">
                              Manager Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              name="managerName"
                              {...register("managerName")}
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">
                              Manager Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              name="emailId"
                              {...register("emailId")}
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              name="phoneNumber"
                              {...register("phoneNumber")}
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              name="password"
                              {...register("password")}
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddManager;

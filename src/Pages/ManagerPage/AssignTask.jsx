import React from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../../Components/Header1";

const AssignTask = () => {
  const jwt = localStorage.getItem("token");
  const assigntask_url = "http://localhost:4424";
  const authAxios = axios.create({
    Base_Url: assigntask_url,
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
  const handle = (data) => {
    console.log(data);
    authAxios.post(`${assigntask_url}/task`, data).then(
      (response) => {
        console.log(response);
        toast.success("Task Assigned!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log("Success");
        alert("Task Assigned");

        navigate("/managerhome");
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
      <Header1></Header1>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <h1 class="mb-3">Assign Task</h1>
            <form onSubmit={handleSubmit(handle, handleError)}>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="your-name" class="form-label">
                    Employee Id
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-name"
                    name="empId"
                    {...register("empId")}
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-surname" class="form-label">
                    Manager Id
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-surname"
                    name="managerId"
                    {...register("managerId")}
                    required
                    value={localStorage.getItem("userid")}
                    readOnly={true}
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-subject" class="form-label">
                    Task Assigned Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="your-subject"
                    name="taskDate"
                    {...register("taskDate")}
                  />
                </div>
                <div class="col-12">
                  <label for="your-message" class="form-label">
                    Assigned Task
                  </label>
                  <textarea
                    class="form-control"
                    id="your-message"
                    name="assignedTask"
                    rows="5"
                    {...register("assignedTask")}
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        data-res="<?php echo $sum; ?>"
                        type="submit"
                        class="btn btn-dark w-100 fw-bold"
                      >
                        Assign Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;

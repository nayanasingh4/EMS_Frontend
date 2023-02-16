import React from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../../Components/Header1";
import Header2 from "../../Components/Header2";

const ApplyLeave = () => {
  const jwt = localStorage.getItem("token");
  const applyleave_url = "http://localhost:2404";
  const authAxios = axios.create({
    Base_Url: applyleave_url,
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
    authAxios.post(`${applyleave_url}/leave`, data).then(
      (response) => {
        console.log(response);
        toast.success("Leave Applied!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.log("Success");
        alert("Leave Applied");

        navigate("/employeehome");
      },
      (error) => {
        console.log(error);
        console.log("error");
        // toast.error("Fill the fields correctly", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
      }
    );
  };

  const handleError = (errors) => {};

  return (
    <div>
      <ToastContainer></ToastContainer>
     <Header2></Header2>
      <div class="container">
        <div class="card">
          <div class="card-header bg-info text-white text-center">
            <strong>Apply Leave</strong>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit(handle, handleError)}>
              <div class="row" />

              <div class="col-sm-6 col-md-6 col-xs-12">
                <div class="form-group row">
                  <label
                    for="example-search-input"
                    class="col-sm-4 col-md-4 col-xs-12 col-form-label clearpadding-right"
                  >
                    Enter Employee Id
                  </label>
                  <div class="col-sm-8 col-md-8 col-xs-12 clearpadding-left">
                    <input
                      class="form-control"
                      placeholder="Employee ID"
                      name="empId"
                      value={localStorage.getItem("userid")}
                      {...register("empId")}
                      readOnly={true}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="example-search-input"
                    class="col-sm-4 col-md-4 col-xs-12 col-form-label clearpadding-right"
                  >
                    Enter Manager Id
                  </label>
                  <div class="col-sm-8 col-md-8 col-xs-12 clearpadding-left">
                    <input
                      class="form-control"
                      placeholder="Manager ID"
                      value={localStorage.getItem("mid")}
                      name="managerId"
                      {...register("managerId")}
                      readOnly={true}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="example-date-input"
                    class="col-sm-4 col-md-4 col-xs-12 clearpadding-right col-form-label"
                  >
                    {" "}
                    Leave Start Date
                  </label>
                  <div class="col-sm-8 col-md-8 col-xs-12 clearpadding-left">
                    <input
                      class="form-control"
                      type="date"
                      name="leaveStartDate"
                      {...register("leaveStartDate")}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="example-date-input"
                    class="col-sm-4 col-md-4 col-xs-12 col-form-label clearpadding-right"
                  >
                    Leave End Date
                  </label>
                  <div class="col-sm-8 col-md-8 col-xs-12 clearpadding-left">
                    <input
                      class="form-control"
                      type="date"
                      name="leaveEndDate"
                      {...register("leaveEndDate")}
                    />
                  </div>
                </div>
              </div>

              <div class=" col-sm-12 col-md-12 col-xs-12 ">
                <br />
              </div>
              <div class="col-sm-12 col-md-12 col-xs-12">
                <div class="form-group row">
                  <label
                    for="example-date-input"
                    class="col-sm-4 col-md-4 col-xs-12 col-form-label clearpadding-right"
                  >
                    Reason
                  </label>
                  <div class="col-sm-2 col-md-2 col-xs-2"></div>
                  <div class="col-8 ">
                    <textarea
                      class="form-control"
                      placeholder="Enter Detailed Reason"
                      rows="3"
                      name="leaveReason"
                      {...register("leaveReason")}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class=" col-sm-12 col-md-12 col-xs-12 ">
                <hr />
              </div>
              <div class=" col-sm-12 col-md-12 col-xs-12 text-center">
                <button type="submit" class="btn btn-info btn-lg">
                  {" "}
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;

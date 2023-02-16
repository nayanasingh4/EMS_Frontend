import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import moment from "moment";
import Header from "../../Components/Header";
import Header1 from "../../Components/Header1";

const UpdateStatus = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  // const [startdate, setStartdate] = useState([]);
  // const [enddate, SetEnddate] = useState([]);
  // const [employeeid, setEmployeeid] = useState([]);
  // const [managerid, setManagerid] = useState([]);
  // const [reason, setReason] = useState([]);
  // const [leavestatus, setLeaveStatus] = useState([]);

  const jwt = localStorage.getItem("token");
  const updatestatus = "http://localhost:4424";
  const url = "http://localhost:2404/leave/id";

  const authAxios = axios.create({
    Base_Url: updatestatus,
    headers: {
      Authorization: `Bearer ${jwt}`,
      Expires: 60,
    },
  });

  useEffect(() => {
    authAxios
      .get(`${url}/${params.leaveId}`, { validateStatus: null })
      .then(
        (response) => {
          console.log(response.data.employeeid);
          setData(
            moment(response.data.leaveStartDate).format("YYYY-MM-DD")
          );
          setData(moment(response.data.leaveEndDate).format("YYYY-MM-DD"));
          // setEmployeeid(response.data.empId);
          // setReason(response.data.leaveReason);
          // setLeaveStatus(response.data.status);
          setData(response.data);
        },
        (error) => {
          console.log("error");
        }
      );
  }, []);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handle = (data) => {
    console.log(data);

    axios
      .put(`http://localhost:2404/leave/update/${params.leaveId}`, data)
      .then(
        (response) => {
          console.log(response.data);

          alert("Leave Status updated successfully");
          navigate("/updateleavestatus");
        },
        (error) => {
          console.log("error");
          console.log(error);
        }
      );
  };

  const handleError = (errors) => {};

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header1></Header1>
      {data.length > 0 &&
            data.map((item) => {
              return (
      <div class="container">
        <div class="card">
          <div class="card-header bg-info text-white text-center">
            <strong>Update Leave</strong>
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
                      value={item.empId}
                      {...register("empId")}
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
                      value={item.managerId}
                      name="managerId"
                      {...register("managerId")}
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
                      value={moment(item.leaveStartDate).format("YYYY-MM-DD")}
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
                      value={moment(item.leaveEndDate).format("YYYY-MM-DD")}
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
                      value={item.leaveReason}
                      {...register("leaveReason")}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="example-search-input"
                  class="col-sm-4 col-md-4 col-xs-12 col-form-label clearpadding-right"
                >
                  Status
                </label>
                <div class="col-sm-8 col-md-8 col-xs-12 clearpadding-left">
                  <br></br>
                  <input
                    class="form-control"
                    placeholder="Pending"
                    name="status"
                    defaultValue={item.status}
                    {...register("status")}
                  />
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
         );
        })}
    </div>
  );
};

export default UpdateStatus;

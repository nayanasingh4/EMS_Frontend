import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from 'moment';

import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
const Getleave = () => {
  const params = useParams();
  const [leaveId, setLeaveId] = useState("");
  const [data, setData] = useState([]);
  const url = "http://localhost:2404/leave/id";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios.get(`${url}/${params.leaveId}`, { validateStatus: null }).then(
      (response) => {
        setData(response.data);
        console.log(response.data);

        setData(moment(response.data.leaveStartDate
            ).format("YYYY-MM-DD")
            );
  
            setData(moment(response.data.leaveEndDate
              ).format("YYYY-MM-DD")
              );
      },
      (error) => {
        console.log("error");
      }
    );
  }, []);


  const leaveform = "http://localhost:4424";

  const jwt = localStorage.getItem("token");
  const authAxios = axios.create({
  Base_Url: leaveform,
  headers: {
    Authorization: `Bearer ${jwt}`,
    maxRedirects: 0,
  },
});

  const handle = (data) => {
    console.log(data);


    authAxios.put(`${leaveform}/getleave/update/${params.leaveId}`, data)
    .then(
      (response) => {
        console.log(response.data);
    
        alert ("Leave Status updated successfully");
        
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
      Getleave
      <div class="container">
        <div class="card">
          <div class="card-header bg-info text-white text-center">
            <strong>Update Leave</strong>
          </div>
          <div class="card-body">
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <div>
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
                      value={item.employeeId}
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
                  
                    Leave Start Date
                  </label>
                  <div class="col-sm-8 col-md-8 col-xs-12 clearpadding-left">
                    <input
                      class="form-control"
                      type="date"
                      name="leaveStartDate"
                      value={item.leaveStartDate}
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
                      value={item.leaveEndDate}
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
                    defaultValue={item.status}
                    name="status"
                    {...register("status")}
                  />
                </div>
              </div>

              <div class=" col-sm-12 col-md-12 col-xs-12 ">
                <hr />
              </div>
              <div class=" col-sm-12 col-md-12 col-xs-12 text-center">
                <button type="submit" class="btn btn-info btn-lg">
                
                  Apply
                </button>
              </div>
            </form>
                  </div>
                );
              })}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Getleave;

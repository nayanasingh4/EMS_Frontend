import React from 'react'
import Header from "../../Components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate,useParams} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import moment from 'moment';
import Header1 from '../../Components/Header1';
import Header2 from '../../Components/Header2';
const UpdateTask = () => {
    const params=useParams();
    const [date, setDate] = useState('');
    const [progress, setProgress] = useState('');
    const [task, setTask] = useState('');
    useEffect(() => {
    authAxios
    .get(`http://localhost:4424/task/${params.taskId}`,{ validateStatus: null})
    .then(
      (response) => {
        // console.log(response.data);
        setDate(moment(response.data.taskDate
          ).format("YYYY-MM-DD")
          );
        // console.log(moment(response.data.taskDate
        //   ).format("YYYY-MM-DD"));
        setTask(response.data.assignedTask
          );
          setProgress(response.data.taskProgress);
       
        // console.log(response.data.assignedTask
        //   );
      },
      (error) => {
        console.log("error");
        // console.log(error);
      }
    );
    });
  const jwt = localStorage.getItem("token");
  const updatetask_url = "http://localhost:2404";
  const authAxios = axios.create({
    Base_Url: updatetask_url,
    headers: {
      Authorization: `Bearer ${jwt}`,
      maxRedirects: 0,
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


    authAxios.put(`${updatetask_url}/gettask/update/${params.taskId}`, data)
    .then(
      (response) => {
        //   console.log(response.data);
    
        alert ("Task Progress updated successfully");
        navigate("/checktask")
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
    <Header2></Header2>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <h1 class="mb-3">Update Task Progress</h1>
          <form onSubmit={handleSubmit(handle, handleError)}>
            <div class="row g-3">
              <div class="col-md-6">
                <label for="your-name" class="form-label">
                  Task Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="your-name"
                  name="taskId"
                value={params.taskId}
                  required
                  {...register("taskId")}
                />
              </div>

              <div class="col-md-6">
                <label for="your-name" class="form-label">
                  Manager Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="your-name"
                  name="managerId"
                value={localStorage.getItem("mid")}
                {...register("managerId")}
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="your-name" class="form-label">
                  Employee Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="your-name"
                  name="empId"
                value={localStorage.getItem("userid")}
                {...register("empId")}
                  required
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
                defaultValue={date}
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
                  required
                  defaultValue={task}
                  {...register("assignedTask")}
                ></textarea>
              </div>
              <div class="col-md-6">
                <label for="your-surname" class="form-label">
                 Task Progress
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="your-surname"
                  name="taskProgress"
                  {...register("taskProgress")}
                  required
                 defaultValue={progress}
                />
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-md-6">
                    <button
                      data-res="<?php echo $sum; ?>"
                      type="submit"
                      class="btn btn-dark w-100 fw-bold"
                    >
                      Update Task
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
  )
}

export default UpdateTask
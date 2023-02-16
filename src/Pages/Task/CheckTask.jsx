import React from "react";
import Header from "../../Components/Header";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UpdateTask from "./UpdateTask";
import {Link} from 'react-router-dom';
import Header1 from "../../Components/Header1";
import Header2 from "../../Components/Header2";


const CheckTask = () => {
  const [data, setData] = useState([]);
  const jwt = localStorage.getItem("token");
  const checktask_url = "http://localhost:2404";
  const authAxios = axios.create({
    Base_Url: checktask_url,
    headers: {
      Authorization: `Bearer ${jwt}`,
      maxRedirects: 0,
    },
  });

  //   axios.interceptors.request.use(
  //     config=>{config.headers.authorization=`Bearer ${jwt}`;
  //   return config;
  //     },error=>{return Promise.reject(error);}
  //   );

 

  useEffect(() => {
    


    authAxios
      .get(`${checktask_url}/gettask/empId/${localStorage.getItem("userid")}`, {
        validateStatus: null,
      })
      .then(
        (response) => {
          //   console.log(response.data);
          setData(response.data);
        },
        (error) => {
          console.log("error");
          console.log(error);
        }
      );
  });

  return (
    <div>
      <Header2></Header2>
      
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        Check Assigned Task
      </p>

      <section>
        <table class="table table-hover table-fixed">
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Task Date</th>
              <th>Assigned Task</th>
              <th>Task Progress</th>
              <th>Actions</th>
            </tr>
          </thead>

          {data.length > 0 &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.taskId} </td>
                  <td>{item.taskDate} </td>
                  <td>{item.assignedTask} </td>
                  <td>{item.taskProgress}</td>
                  <td>
                  {/* <Button  tag={Link} to={'/updatetask'} class="btn btn-outline-primary" data-mdb-ripple-color="dark">Update</Button> */}
                  <Link to={`/updatetask/${item.taskId}`}><Button>Update</Button></Link>
                  </td>
                </tr>
              );
            })}
        </table>
      </section>
    </div>
  );
};

export default CheckTask;

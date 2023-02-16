import React from "react";
import Header from "../../Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Header1 from "../../Components/Header1";
const UpdateLeaveStatus = () => {
    
  const [data, setData] = useState([]);
//   const jwt = localStorage.getItem("token");
  const updateleavestatus_url = "http://localhost:4424";
//   const authAxios = axios.create({
//     Base_Url: updateleavestatus_url,
//     headers: {
//       Authorization: `Bearer ${jwt}`,
//       Expires: 60,
//     },
//   });

  useEffect(() => {
    axios
      .get(
        `${updateleavestatus_url}/getleave/managerid/${localStorage.getItem(
          "userid"
        )}`,
        { validateStatus: null }
      )
      .then(
        (response) => {
          console.log(response.data);
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // const handle = (leaveid) => {
  //  // console.log(data);

// const trial="http://localhost:2404";
//     axios.put(`${updateleavestatus_url}/getleave/update/${leaveid}`, data)
//     .then(
//       (response) => {
//         console.log(response.data);
    
//         alert ("Leave Status updated successfully");
//         //window.location.reload();
//       },
//       (error) => {
//         console.log("error");
//         console.log(error.data);
        
//       }
//     );
//     };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header1></Header1>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        Update Leave Status
      </p>

      <section>
        <table class="table table-hover table-fixed">
          <thead className="info">
            <tr>
              <th>Leave Id</th>
              <th>Employee Id</th>
              <th>Manager Id</th>
              <th>Leave Start Date</th>
              <th>Leave End Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          {data.length > 0 &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.leaveId} </td>
                  <td>{item.empId} </td>
                  <td>{item.managerId} </td>
                  <td>{item.leaveStartDate} </td>
                  <td>{item.leaveEndDate}</td>
                  <td>{item.leaveReason}</td>
                  <td>
                    {item.status}
                  </td>
                  
                  <td>
              
                    <Link to={`/updatestatus/${item.leaveId}`}><Button>Update</Button></Link>
                  </td>
                </tr>
              );
            })}
        </table>
      </section>
    </div>
  );
};

export default UpdateLeaveStatus;

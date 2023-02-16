import React, { useState } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Header1 from "../../Components/Header1";
import Header2 from "../../Components/Header2";

const CheckLeave = () => {
  const [data, setData] = useState([]);
  const jwt = localStorage.getItem("token");
  const checkleave_url = "http://localhost:2404";
  const authAxios = axios.create({
    Base_Url: checkleave_url,
    headers: {
      Authorization: `Bearer ${jwt}`,
      Expires: 60,
    },
  });

  useEffect(() => {
    authAxios
      .get(`${checkleave_url}/leave/${localStorage.getItem("userid")}`)
      .then(
        (response) => {
          // console.log(response.data);
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  });

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header2></Header2>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        Check Leave Status
      </p>

      <section>
        <table class="table table-hover table-fixed">
          <thead className="info">
            <tr>
              {/* <th>Serial no.</th> */}
              <th>Leave Id</th>
              <th>Employee Id</th>
              <th>Leave Start Date</th>
              <th>Leave End Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>

          {data.length > 0 &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.leaveId} </td>
                  <td>{item.empId} </td>
                  <td> {item.leaveStartDate}</td>
                  <td>{item.leaveEndDate} </td>
                  <td>{item.leaveReason} </td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
        </table>
      </section>
    </div>
  );
};

export default CheckLeave;

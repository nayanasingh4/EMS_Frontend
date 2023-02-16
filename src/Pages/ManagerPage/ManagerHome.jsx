import React from "react";
import { CDBBtn, CDBContainer } from "cdbreact";
import Header from "../../Components/Header";
import Header1 from "../../Components/Header1";

const ManagerHome = () => {
  const mystyle = {
    backgroundColor: "lightcyan",
  };
  return (
    <div style={mystyle}>
      <Header1></Header1>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        Manager Home Page
      </p>
      <CDBContainer>
        <a href="/assigntask">
          <CDBBtn color="info">Assign Task</CDBBtn>
          <hr />
        </a>

        <a href="/checktaskprogress">
          <CDBBtn color="info">Check Task Progress</CDBBtn>
          <hr />
        </a>
        <a href="/updateleavestatus">
          <CDBBtn color="info">Update Leave Status</CDBBtn>
          <hr />
        </a>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </CDBContainer>
    </div>
  );
};

export default ManagerHome;

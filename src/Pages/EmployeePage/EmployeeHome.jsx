import React from "react";
import Header from "../../Components/Header";
import { CDBBtn, CDBContainer } from "cdbreact";
import Header1 from "../../Components/Header1";
import Header2 from "../../Components/Header2";

const EmployeeHome = () => {
  const mystyle = {
    backgroundColor: "lightcyan",
  };

  return (
    <div style={mystyle}>
      <Header2></Header2>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Employee Page</p>
      <CDBContainer>
        <a href="/applyleave">
          <CDBBtn color="info">Apply Leave</CDBBtn>
          <hr />
        </a>

        <a href="/checkleave">
          <CDBBtn color="info">Check Leave Status</CDBBtn>
          <hr />
        </a>
        <a href="/checktask">
          <CDBBtn color="info">Check Task</CDBBtn>
          <hr />
        </a>
        {/* <a href="/updatetask">
          <CDBBtn color="info">Update Task Progress</CDBBtn>
          <hr />
        </a> */}
        
        <a href="/employeeprofile">
          <CDBBtn color="info">Edit Profile</CDBBtn>
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
      </CDBContainer>
    </div>
  );
};

export default EmployeeHome;

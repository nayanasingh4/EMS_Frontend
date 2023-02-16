import React, { useEffect } from "react";
import { CDBBtn, CDBContainer } from "cdbreact";
import Header from "../../Components/Header";
import { isLoggedIn } from "../../Authentication/Auth";
import Header1 from "../../Components/Header1";

const AdminLanding = () => {
  // isLoggedIn(()=>{console.log("Successful Login")})

  const mystyle = {
    backgroundColor: "lightcyan",
  };

  return (
    <div style={mystyle}>
      <Header1></Header1>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Page</p>
      <CDBContainer>
        <a href="/addemployee">
          <CDBBtn color="info">Add Employee</CDBBtn>
          <hr />
        </a>
        <a href="/addmanager">
          <CDBBtn color="info">Add Manager</CDBBtn>
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
        <br />
        <br />
      </CDBContainer>
    </div>
  );
};

export default AdminLanding;

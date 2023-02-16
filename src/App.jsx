import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import ApplyLeave from './Pages/Leave/ApplyLeave'
import EmployeeHome from './Pages/EmployeePage/EmployeeHome'
import EmployeeProfile from './Pages/EmployeeProfile'
import Home from './Pages/Home'
import AdminLogin from './Pages/Login/AdminLogin'
import EmployeeLogin from './Pages/Login/EmployeeLogin'
import ManagerLogin from './Pages/Login/ManagerLogin'
import AddEmployee from './Pages/RegisterEmployee/AddEmployee'
import AddManager from './Pages/RegisterManager/AddManager'
import CheckLeave from './Pages/Leave/CheckLeave'
import AdminLanding from './Pages/AdminHome/AdminLanding'
import CheckTask from './Pages/Task/CheckTask'
import ManagerHome from './Pages/ManagerPage/ManagerHome'
import AssignTask from './Pages/ManagerPage/AssignTask'
import CheckTaskProgress from './Pages/ManagerPage/CheckTaskProgress'
import UpdateTask from './Pages/Task/UpdateTask'
import UpdateLeaveStatus from './Pages/ManagerPage/UpdateLeaveStatus'
import Getleave from './Pages/ManagerPage/Getleave'
import UpdateStatus from './Pages/ManagerPage/UpdateStatus'


const App = () => {
  return (
    <div>

<BrowserRouter>
  <Routes>
  <Route index element={<Home/>}></Route>
  <Route path='employeelogin' element= {<EmployeeLogin/>}/>
  <Route path='managerlogin' element= {<ManagerLogin/>}/>
  <Route path='adminlogin' element= {<AdminLogin/>}/>
  <Route path='employeehome' element= {<EmployeeHome/>}/>
  <Route path='addemployee' element= {<AddEmployee/>}/>
  <Route path='addmanager' element= {<AddManager/>}/>
  <Route path='applyleave' element= {<ApplyLeave/>}/>
  <Route path='checkleave' element= {<CheckLeave/>}/>
  <Route path='checktask' element= {<CheckTask/>}/>
  <Route path='employeeprofile' element= {<EmployeeProfile/>}/>
  <Route path='adminlanding' element={<AdminLanding/>}/>
  <Route path='managerhome' element={<ManagerHome/>}/>
  <Route path='assigntask' element={<AssignTask/>}/>
  <Route path='checktaskprogress' element={<CheckTaskProgress/>}/>
  <Route path='updatetask/:taskId' element={<UpdateTask/>}/>
  <Route path='updateleavestatus' element={<UpdateLeaveStatus/>}/>
  <Route path='updatestatus/:leaveId' element={<UpdateStatus/>}/>
  <Route path='getLeave/:leaveId' element={<Getleave/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App



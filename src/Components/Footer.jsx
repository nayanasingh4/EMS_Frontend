import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#454545' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='/'>
          Employee Management System
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
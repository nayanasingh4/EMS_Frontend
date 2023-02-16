import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Header1 from '../Components/Header1'
import Slider from '../Components/Slider'


const Home = () => {

  // const isTokenPresent=localStorage.getItem('token');
  // const check=()=>{
  //   if(token!=null){
  //     return true;
  //   }
  // }

  return (
    <div>
<Header></Header>
        <Slider></Slider>
        <Footer></Footer>
    </div>
  )
}

export default Home
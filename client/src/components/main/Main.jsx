// import './main.css'
import {
    Outlet
  } from "react-router-dom";
  
  
  const Main = () => {
    return (
      <div className='main'>
        <Outlet />
      </div>
    )
  }
  
  export default Main
  
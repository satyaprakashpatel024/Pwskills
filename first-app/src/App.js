import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Avatar from './Avatar';
const App = () => {
  // const obj ={
  //   src:"https://th.bing.com/th/id/OIP.BK8STvfoGAkPFIe0cTCMxAHaFj?rs=1&pid=ImgDetMain",
  //   width:"200px",
  //   height:"200px"
  // }
  const [todos] = useState(['todo1 ','todo2']);

  return (
    <div className='container mt-5'>
      {/* <Avatar
        {...obj} // object passing with destructuring
      />
      <Avatar
        src='https://th.bing.com/th/id/OIP.vYbxnQkWi546p3CjPAtaAwHaEK?pid=ImgDet&w=474&h=266&rs=1'
        width="200px"
        height="200px"
      />
      <Avatar
        src="https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photography.jpg"
        width="200px"
        height="200px"
      >
      <span> children prop</span>
      </Avatar> */}
      {
        todos.map((v,indx)=>
          <li key={indx}>{v}</li>
        )
      }
    </div>
  )
}

export default App;
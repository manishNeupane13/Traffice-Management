import React from 'react';

import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div class="contentlog">
      <h1>
        TRAFFIC <br /><span>MANAGEMENT</span> <br />SYSTEM
      </h1>
      <p class="par">Welcome to the Traffic Management System (TMS). As a traffic officer you play a
        <br /> critical role in ensuring the safety and smooth flow of traffic on our roads.
        <br />We understand that your job can be challenging and stressful at times,
        <br /> which is why we have developed this system to support you in your duties.</p>

      <div class="formlog">
        <h2 className='logintxt'>L O G I N</h2>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="" placeholder="Password" />
        <button class="log" id="log"><Link to="/home">Login</Link></button>

        <br /><br />
       <hr/>
        <div className="othersignopt">
          <span className='newvisitortxt'>
          N e w - V i s i t o r

          </span>
          <br/>

          <Link to="/register">Start Here
          </Link>
        </div>
        

        <div class="icons">
          <Link to="" ><ion-icon name="logo-facebook"></ion-icon></Link>
          <Link to="/"><ion-icon name="logo-instagram"></ion-icon></Link>
          <Link to=""><ion-icon name="logo-google"></ion-icon></Link>

        </div>


      </div>
    </div>
  )
}

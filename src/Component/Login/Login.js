import React from 'react';
import eye from "../../Eye.png"
import "./Login.css"

const Login = () => {
    return (
        <div className='row'>
            <div className='col-4 globtechText'>
            
                   <div className='mt-5'>
                   <h1 className='globetechCompany'>GLOBETECH</h1>
                    <h1 className='globetechCompany'>COMPANY LIMITED</h1>
                   </div>

                
               
                <p className='paraText'>Make yourself digitalized & more effecient</p>
            </div>
            <div className='col-8 loginForm'>
                   <div className='login text-center'>
                   <h3 className='welcomeText2'>Welcome</h3>
                   <p className='signAccount'>Sign in your account</p>
                   <input className='email' type="text" placeholder='Email' /> <br />
                   <input className='password' type="text" placeholder='Password' /> <span className='eye'><img src={eye} alt="" /></span> <br />
                   <button className='loginBtn'>Login</button>
                   </div>
            </div>
        </div>
    );
};

export default Login;
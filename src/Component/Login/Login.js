import React from 'react';
import eye from "../../Eye.png"
import vector1 from '../../Vector 1.png'
import CustomLink from '../CustomLink/CustomLink';
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

                  <CustomLink to='/home'> <img className='vector1' src={vector1} alt="" /> </CustomLink>
            </div>
            <div className='col-8 loginForm'>
                   <div className='login text-center'>
                   <h3 className='welcomeText2'>Welcome</h3>
                   <p className='signAccount'>Sign in your account</p>
                   <input className='email' type="text" placeholder='Email' /> <br />
                   <input className='password' type="text" placeholder='Password' /> <span className='eye'><img src={eye} alt="" /></span> <br />
                   <button className='loginBtn'>Login</button>

                   </div>
                   <footer className='text-center'>Globetech Company Limited</footer>

            </div>
        </div>
    );
};

export default Login;
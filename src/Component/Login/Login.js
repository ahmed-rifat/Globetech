import React from 'react';
import { Button } from 'react-bootstrap';
import eye from "../../Eye.png"
import vector1 from '../../Vector 1.png'
import CustomLink from '../CustomLink/CustomLink';
import "./Login.css"


const Login = () => {
    
    return (
        <div className='row loginPage'>
            <div className='col col-lg-4 col-md-4 col-sm-6 globtechText'>
            
                   <div className='mt-5'>
                   <h1 className='globetechCompany'>GLOBETECH</h1>
                    <h1 className='globetechCompany'>COMPANY LIMITED</h1>
                   </div>

                
               
                <p className='paraText'>Make yourself digitalized & more effecient</p>

                  <CustomLink to='/home'> <img className='vector1' src={vector1} alt="" /> </CustomLink>
            </div>
            <div className='col col-lg-8 col-md-8 col-sm-6 loginForm'>
                   <div className='login'>
                       <div className='text-center'>
                            <h3 className='welcomeText2'>Welcome</h3>
                            <p className='signAccount'>Sign in your account</p>
                            <input className='email' type="text" placeholder='Email' /> <br />
                            <input className='password' type="text" placeholder='Password' /> <span className='eye'><img src={eye} alt="" /></span> <br />
                            <Button className='loginBtn'>Login</Button>
                       </div>

                   </div>
                   <footer className='text-center'>Globetech Company Limited</footer>

            </div>
        </div>
    );
};

export default Login;
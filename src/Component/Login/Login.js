import React from 'react';
import eye from "../../Eye.png"
import "./Login.css"

const Login = () => {
    return (
        <div className='row'>
            <div className='col-4'>
                <h1>GLOBETECH
                    COMOANY LIMITED
                </h1>
                <p>Make yourself digitalized & more effecient</p>
            </div>
            <div className='col-8'>
                   <h1>Welcome</h1>
                   <p>Sign in your account</p>
                   <input type="text" placeholder='Email' /> <br />
                   <input type="text" placeholder='Password' /> <span className='eye'><img src={eye} alt="" /></span> <br />
                   <button>Login</button>
            </div>
        </div>
    );
};

export default Login;
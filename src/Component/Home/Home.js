import React from 'react';
import { Button } from 'react-bootstrap';
import bannerImg from "../../Group 1.png";
import vector from "../../Vector.png";
import "./Home.css"

const Home = () => {
    return (
        <div className='container row'>
            <div className='col-8'>
            <div className='d-flex align-items-center vector'>
                <div>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                    
                </div>
                <div>
                     <img src={vector} alt="" />
                </div>
            </div>
            <h1 className='welcomeText'>Welcome to <span id='globetech'>Globetech</span></h1>
            <p className='itService'>We are committed to deliver <span id='bestIt'>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
            <div>
                <Button className='me-3 supportbtn'>Support us</Button>
                <Button className='missionbtn'>Our Mission</Button>
            </div>
            </div>

            <div className='col-4'>
                <img className='ellipse' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Home;
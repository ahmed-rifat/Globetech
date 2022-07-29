import React from 'react';
import { Button } from 'react-bootstrap';
import bannerImg from "../../Group 1.png";
import "./Home.css"

const Home = () => {
    return (
        <div className='container row'>
            <div className='col-8'>
            <h1 className='welcomeText'>Welcome to <span>Globtech</span></h1>
            <p className='itService'>We are committed to deliver <span>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
            <div>
                <Button>Support us</Button>
                <Button>Our Mission</Button>
            </div>
            </div>

            <div className='col-4'>
                <img className='ellipse' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Home;
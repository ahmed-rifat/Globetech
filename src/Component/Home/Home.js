import React from 'react';
import { Button } from 'react-bootstrap';
import bannerImg from "../../Group 1.png";
import vector from "../../Vector.png";
import features from "../../image 2.png";
import "./Home.css"
import Headers from '../Headers/Headers';

const Home = () => {
    return (
        <section>
            <Headers></Headers>
            <div className='container row'>
            <div className='col-8'>
            <div className='d-flex align-items-center vector'>
                <div>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                    
                </div>
                <div>
                     <img className='vectorImg' src={vector} alt="" />
                </div>
            </div>
            <h1 className='welcomeText mt-5'>Welcome to <span id='globetech'>Globetech</span></h1>
            <p className='itService'>We are committed to deliver <span id='bestIt'>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
            <div>
                <Button className='me-3 supportbtn'>Support us</Button>
                <Button className='missionbtn'>Our Mission</Button>
            </div>
            </div>

            <div className='col-4'>

                {/* <img className='ellipse' src={bannerImg} alt="" /> */}
                <section>
                <div className='ellipse4'></div>
                <div className='ellipse3'></div>
                <div className='ellipse2'></div>
                <div className='ellipse1'></div>
                </section>


               <section>
               <div className='ellipse10'></div>
                <div className='ellipse11'></div>
                <div className='ellipse6'></div>
                <div className='ellipse9'></div>
                <div className='ellipse7'></div>
                <div className='ellipse8'></div>
               </section>

            </div>
        </div>

        
            <div>
            <img className='feature img-fluid' src={features} alt="" />
            </div>
            
        
        </section>
        
    );
};

export default Home;
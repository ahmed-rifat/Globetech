import React from 'react';
import software1 from '../../software 1.png';
import "./Services.css"

const Services = () => {
    return (
        <div>
            <h1>SERVICES</h1>
            <h1>We provides services to our clients</h1>
               {/* card */}
            <div>
                <div className='boxs'>
                   <img src={software1} alt="" />
                   <h1>Software Solution</h1>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
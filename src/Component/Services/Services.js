import React from 'react';
import software1 from '../../software 1.png';
import ecommerce from '../../image 3.png';
import erp from '../../image 4.png';
import bulksms from '../../bulk 1.png';
import grapichs from '../../image 5.png';
import digital from '../../image 6.png';
import vector from '../../Vector.png';
import "./Services.css"
import Headers from '../Headers/Headers';

const Services = () => {
    return (
        <div>
         <Headers></Headers>
            <div className='d-flex align-items-center w-100 vector2'>
                <div>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                    
                </div>
                <div>
                     <img className='vectorImg' src={vector} alt="" />
                </div>
            </div>
            <h3 className='text-center services'>SERVICES</h3>
            <h3 className='text-center clientText'>We provides services to our clients</h3>
               {/* card */}
            <div className='cardbox'>
                {/* card1 */}
                <div className='boxs'>
                   <img className='imgSize' src={software1} alt="" />
                   <h3 className='text-center textHead'>Software Solution</h3>
                   <p className='textArea mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
                {/* card2 */}
                <div className='boxs'>
                   <img className='imgSize' src={ecommerce} alt="" />
                   <h3 className='text-center textHead'>E-Commerce Solution</h3>
                   <p className='textArea mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
                {/* card3 */}
                <div className='boxs'>
                   <img className='imgSize' src={erp} alt="" />
                   <h3 className='text-center textHead mt-3'>ERP Solution</h3>
                   <p className='textArea mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
                {/* card4 */}
                <div className='boxs'>
                   <img className='imgSize' src={bulksms} alt="" />
                   <h3 className='text-center textHead'>Bulk SMS Service</h3>
                   <p className='textArea mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
                {/* card5 */}
                <div className='boxs'>
                   <img className='imgSize' src={grapichs} alt="" />
                   <h3 className='text-center textHead'>Graphic Design</h3>
                   <p className='textArea mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
                {/* card6 */}
                <div className='boxs'>
                   <img className='imgSize' src={digital} alt="" />
                   <h3 className='text-center textHead'>Digital Marketing</h3>
                   <p className='textArea mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                   <button className='buttons'>MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
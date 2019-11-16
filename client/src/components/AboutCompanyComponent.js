import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faAnchor, faDove } from '@fortawesome/free-solid-svg-icons'

const AboutCompany = () => {
    return (
        <div className='col-md-7 pl-md-2'>
            <div className='mb-4'>
                <h4>OrgBoom?</h4>
                <span>
                OrgBoom Tech is a company that prides in developing organisations and individuals, using different resources, to arrive at a better society.
                 </span>
            </div>
           
            <div className='col-12 row'>
                <div id='mission-icon' className='col-md-1'>
                    <FontAwesomeIcon icon={faBullhorn} />
                </div>
                <div className='col-md-9'>
                    <h6>Our Mission</h6>
                    <span>
                   Our mission is narrowed down to using tech initiatives to develop our world.
                    </span>
                </div>
            </div>
            <div className='col-12 row mt-3'>
                <div id='mission-icon' className='col-md-1'>
                    <FontAwesomeIcon icon={faDove} />
                </div>
                <div className='col-md-9'>
                    <h6>Our Vision</h6>
                    <span>
                        To train and develop all African minds for the future, today.
                    </span>
                </div>
            </div>
            <div className='col-12 row mt-3'>
                <div id='mission-icon' className='col-md-1'>
                    <FontAwesomeIcon icon={faAnchor} />
                </div>
                <div className='col-md-9'>
                    <h6>Our Core Values</h6>
                    <span>
                        Maintaining good relationships with our partners and customers 
                        by going an extra mile to satisfy their needs with our dynamic and transparent methods of working
                    </span>
                </div>
            </div>
        
        </div>
        
    )
}

export default AboutCompany
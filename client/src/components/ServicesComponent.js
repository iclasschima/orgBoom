import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPaintBrush, faHandPointRight, faAward } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);

const ServicesComponent = () => {
    return (
        <div id='ServicesComponent'>
            <div>
                <center>
                    <h3>COMPREHENSIVE SERVICES</h3>
                <span>
                    From strategy to execution, our winning combination of innovative thinking, scientific design and
                     sophisticated development ensure we're delivering value to you. With our team devising various ways
                     and services in tackling issues and filling lop holes in the country.   
                </span>
                </center>
            </div>
            <div id='services'>
                <div id='services-header'>
                    <h4><FontAwesomeIcon icon={faHandPointRight} />  #CodeWithMe</h4>
                    <span>
                        #CodeWithMe, which is already in progress and at its first season, is a program designed to help develop young individuals
                        in coding and other essential computer courses.It is basically aimed at exposing students to the ICT world from their secondary school level
                         and beyond.
                    </span><br/><br/>
                    <span> Our method of training is to aid and further supplement what is being taught by your school’s computer science teacher, rather than to replace.There would be no need
                    for textbooks or big notes as our courses are 100 % practical, with the aim of getting student comfortable enough to use the computer. </span>
                    <span>Our instructors are young and vibrant graduates with ICT industry renowned certifications and experience to instruct and teach the students.
                    Armed with quality materials, up to date resources and tools to ensure that we deliver first class knowledge to the students.</span>
                
                </div>
               
                <div className="row text-center">
                
                    <div className="col-md-3">
                        <FontAwesomeIcon icon={faGraduationCap} id="icons" />
                        <h6>Train</h6>
                        <ul id="under-services">
                            <li>Desktop Publishing</li>
                            <li>Graphic Designing</li>
                            <li>Web Development</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon icon={["fab", "android"]} id="icons" />
                        <h6>Develop</h6>
                        <ul id="under-services">
                            <li>Websites & Blogs</li>
                            <li>Web Applications</li>
                            <li>Mobile Applications</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon icon={faPaintBrush} id="icons" />
                        <h6>Design</h6>
                        <ul id="under-services">
                            <li>Cards</li>
                            <li>Posters</li>
                            <li>Photos</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon icon={faAward} id="icons" />
                        <h6>Test</h6>
                        <ul id="under-services">
                            <li>Competition</li>
                            <li>Scholarships</li>
                            <li>Awards</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;
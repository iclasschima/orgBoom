import React, { Component } from 'react';
import Person from './PersonComponent';
import AboutCompany from "./AboutCompanyComponent";

export default class AboutUsComponent extends Component {

    render() {
        let person = this.state.personDetail.map(person => { return (<Person person={person} key={person.name}/>) })
        
        return(
            <div className='container' id='AboutUsComponent'>
                <div className='row'>
                    <AboutCompany />
                    <div className='col-md-5 mt-4' id="AboutUs">
                        {person}
                    </div> 
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            personDetail: [
                {
                    name: "Francis Izuoba",
                    title: "CEO & Co-founder",
                    skills: "Software Developer & Graphic Designer",
                    img: require("../img/francis.jpeg")
                },
                {
                    name: "Ikenna Umeh",
                    title: "COO & Co-founder",
                    skills: "Software Developer & Trainer",
                    img: require("../img/ikenna.jpeg")
                },
                {
                    name: "Ezeirunnne Chima",
                    title: "CTO & Co-founder",
                    skills: "Software Developer & Trainer",
                    img: require("../img/chima.jpg")
                }
            ]
        }
    }
}
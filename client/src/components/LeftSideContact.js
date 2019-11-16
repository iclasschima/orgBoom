import React, {Component} from 'react'
import { TextInput, Textarea, Button, Icon } from 'react-materialize'
import axios from 'axios'

export default class LeftSideContact extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit (e) {
        e.preventDefault()

        const { name, company, email, phone, message } = this.state;

        axios.post("/api/form", {
            name,
            company,
            email,
            phone,
            message
        })
        alert("Thank you for contacting us")
        const resetForm = e.target;
        resetForm.reset()

       
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="col-md-8 form-row">
                <div className='form-group col-md-6'>
                    <TextInput name='name' label="Name" onChange={this.handleChange} required/>
                </div>
                <div className='form-group col-md-6'>
                    <TextInput name='company' label="Company" onChange={this.handleChange} required/>
                </div>
                <div className='form-group col-md-6'>
                    <TextInput name='email' label="Email" onChange={this.handleChange} required/>
                </div>
                <div className='form-group col-md-6'>
                    <TextInput name='phone' label="Phone" onChange={this.handleChange} required/>
                </div>
                <div className='form-group col-12'>
                    <Textarea name='message' label="Message" onChange={this.handleChange} required/>
                </div>
                <div className='form-group col-12 right'>
                    <Button type='submit' waves="light" className="float-right">Send Message <Icon right>send</Icon></Button>
                </div>
            </form>
        )
    }
}
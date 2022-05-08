import React, { Component } from 'react';
import { render } from 'react-dom';
   
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
import { component } from 'react';   
import '../main/form.css';  
    
class tform extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',
            fullName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',    
            phoneNumber: '',     
            file:'',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName,FullName, emailId, dob, gender, phoneNumber,file } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    //Full name     
    if (!FullName) {    
        formIsValid = false;    
        formErrors["FullNameErr"] = "FullName is required.";    
    }    

        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{8}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
    
        
        this.setState({ formErrors: formErrors });    
        return formIsValid;   
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.We will send eligibility and verification code for your mail.Then,You can go teachers page and enter your verification code. After you can use your page. ')    
           this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr,FullNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr,documentErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv-t">    
                <h3 style={{ textAlign: "center" }} >Teacher Admission Form </ h3> <br/><br/>

                <div>    
                            <label htmlFor="FullName">Full Name</label>    
                            <input type="text" name="FullName"    
                                value={this.state.FullName}    
                                onChange={this.handleChange}    
                                placeholder="Your full name.."    
                                className={FullNameErr ? ' showError' : ''} />    
                            {FullNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{FullNameErr}</div>    
                            }    
    
                        </div>    


                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div> 

                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option class="c" value="select">--Select--</option>    
                                <option class="c" value="male">Male</option>    
                                <option class="c" value="female">Female</option>    
                                <option class="c" value="female">Other</option>    
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>   

                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    

                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    


                        <div>    
                            <label htmlFor="emailId">Email Id</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div> 

                       
                          
                        <div>    
                            <label htmlFor="file">Please upload your C.V</label>    
                            <div>
			<input type="file" name="file" onChange />
                      </div>    
                            {documentErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{documentErr}</div>    
                            }    
                        </div>   
                  <input type="submit" value="Submit" /> 
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default tform;



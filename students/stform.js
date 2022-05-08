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


class stform extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            fullName: '',
            studName: '',
            Address: '',
            dob: '',
            year: '',
            Institutionname: '',
            emailId: '',    
            education: 'select',    
            phoneNumber: '',     
            document: '',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { FullName,studName,Address,dob,year,Institutionname, emailId, education, phoneNumber,document } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
       //Full name     
    if (!FullName) {    
        formIsValid = false;    
        formErrors["FullNameErr"] = "FullName is required.";    
    }    
     //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    //Address    
    if (!Address) {    
        formIsValid = false;    
        formErrors["AddressErr"] = "Address is required.";    
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
    //year     
    if (!year) {    
        formIsValid = false;    
        formErrors["yearErr"] = "Studying year is required.";    
    } 
    //Institutionname     
    if (!Institutionname) {    
        formIsValid = false;    
        formErrors["InstitutionErrr"] = "Institution name is required.";    
    } 
    //education   
    if (education=== '' || education=== "select") {    
        formIsValid = false;    
        formErrors["educationErr"] = "Select istitution.";    
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
    
        
        //education     
    if (!education) {    
        formIsValid = false;    
        formErrors["educationErrr"] = "Please upload your documents";    
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
            alert('You have been successfully registered.We will send eligibility and verification code for your mail.Then,You can go students page and enter your verification code. After you can use your page. ')    
            this.setState(this.initialState)    
        }    
    } 
    
    
    
    render() { 

        
        
        
                                                                                                                                                                                                                                                                                                                                                
const { FullNameErr,studNameErr,AddressErr,dobErr,InstitutionErr,yearErr, emailIdErr,  educationErr, phoneNumberErr,documentErr} = this.state.formErrors;    
    
    return (    
            
                <div className="formDiv-s"> 

               <h3 style={{ textAlign: "center" }} >Student Admission Form </ h3>  <br/><br/>  
                <div>  
                    <form onSubmit={this.handleSubmit}>    
                    <div>    
                            <label htmlFor="FullName">Full Name</label>    
                            <input type="text" name="FullName"    
                                value={this.state.FullName}    
                                onChange={this.handleChange}    
                                placeholder="Your full name"    
                                className={FullNameErr ? ' showError' : ''} />    
                            {FullNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{FullNameErr}</div>    
                            }    
    
                        </div>  
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name"    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>  
                        <div>    
                            <label htmlFor="Address">Address</label>    
                            <input type="text" name="Address"    
                                value={this.state.Address}    
                                onChange={this.handleChange}    
                                placeholder="Your address"    
                                className={AddressErr ? ' showError' : ''} />    
                            {AddressErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{AddressErr}</div>    
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
                            <label htmlFor="text">Studiying year</label>    
                            <input type="text" name="year"    
                                value={this.state.year}    
                                onChange={this.handleChange}    
                                placeholder="Studiying year"    
                                className={yearErr ? ' showError' : ''} />    
                            {yearErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{yearErr}</div>    
                            }    
                        </div> 

                         <div>    
                            <label htmlFor="education">Education institution</label>    
                            <select name="education" onChange={this.handleChange}    
                                className={educationErr ? ' showError' : ''}    
                                value={this.state.education} >    
                                <option class="c" value="select">--Select--</option>  
                                <option class="c" value="school">school</option>    
                                <option class="c" value="college">college</option>    
                                <option class="c" value="university">university</option> 
                                <option class="c" value="others">others</option> 
                                </select>    
                            {educationErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{educationErr}</div>    
                            }    
                        </div>     
                        <div>    
                            <label htmlFor="text">Institution name</label>    
                            <input type="text" name="Institutionname"    
                                value={this.state.Institutionname}    
                                onChange={this.handleChange}    
                                placeholder="Name of studying institution"    
                                className={InstitutionErr ? ' showError' : ''} />    
                            {InstitutionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{InstitutionErr}</div>    
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
                            <label htmlFor="file">These service only available for poor students. So We want verify your eligibility for this helping service.Please upload your conformation letter with your area G.S and J.P signatures.</label>    
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
    
export default stform;



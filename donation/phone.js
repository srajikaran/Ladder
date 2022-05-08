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


class Phone extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {  
            emailId: '',      
            phoneNumber: '',             
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { emailId, phoneNumber } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
      
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
            alert('You have been successfully registered.We will send a OTP message for your mail or phone.')    
            this.setState(this.initialState)    
        }    
    } 
    
    
    
    render() { 

        
        
        
                                                                                                                                                                                                                                                                                                                                                
const { emailIdErr,phoneNumberErr} = this.state.formErrors;    
    
    return (    
            
                <div className="formDiv-conform"> 

               <h3 style={{ textAlign: "center" }} >Conformation </ h3> <br/><br/> 
               Please enter your phone number or email id for send OTP message.<br/><br/> 
                <div>  
                    <form onSubmit={this.handleSubmit}> 

                     
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
                        <br/><br/><h3 align="center"> OR </h3> <br/><br/>
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
                           
                  <input type="submit" value="Submit" />
                  <button type="submit" className="btnp"> <a href="./otp">OTP </a></button>
                            
                   
                  
                    </form>    
                </div>    
            </div >
            
                
        )    
    }    
}    
    
export default Phone;



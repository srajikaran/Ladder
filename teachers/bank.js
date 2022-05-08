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


class Bank extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            fullName: '',
            acno: '',
            Address: '',
            emailId: '',    
            bank: 'select',   
            phoneNumber: '',    
            document: '',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { FullName,acno,Address,emailId, bank, phoneNumber,document } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
       //Full name     
    if (!FullName) {    
        formIsValid = false;    
        formErrors["FullNameErr"] = "FullName is required.";    
    }    
     //account number     
        if (!acno) {    
            formIsValid = false;    
            formErrors["acnoErr"] = "Account number is required.";    
        }    
    //Address    
    if (!Address) {    
        formIsValid = false;    
        formErrors["AddressErr"] = "Address is required.";    
    } 
    
    
    //bank  
    if (bank=== '' || bank=== "select") {    
        formIsValid = false;    
        formErrors["bankErr"] = "Select bank";    
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
            alert('You have been successfully registered.We will send your monthly salary for your account.')    
            this.setState(this.initialState)    
        }    
    } 
    
    
    
    render() { 

        
        
        
                                                                                                                                                                                                                                                                                                                                                
const { FullNameErr,acnoErr,AddressErr, emailIdErr,  bankErr,phoneNumberErr,documentErr} = this.state.formErrors;    
    
    return (    
            
                <div className="formDiv-bankt"> 

               <h3 style={{ textAlign: "center" }} >Bank Details </ h3> <br/><br/>  
                <div>  
                    <form onSubmit={this.handleSubmit}> 

                   
                    <div>    
                            <label htmlFor="bank">Bank</label>    
                            <select name="bank"    
                                value={this.state.bank}    
                                onChange={this.handleChange}    
                                className={bankErr ? ' showError' : ''} >    
                                <option class="c" value="select">--Select--</option>    
                                <option class="c" value="commercial">Commercial Bank</option>    
                                <option class="c" value="peoples">Peoples' Bank</option>    
                                <option class="c" value="boc">BOC</option>
                                <option class="c" value="hnb">HNB</option>    
                                   
                            </select>    
                            {bankErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{bankErr}</div>    
                            }    
                        </div> 
                   
                    <div>    
                            <label htmlFor="acno">Account number</label>    
                            <input type="text" name="acno"    
                                value={this.state.acno}    
                                onChange={this.handleChange}    
                                placeholder="Enter Your account number"    
                                className={acnoErr ? ' showError' : ''} />    
                            {acnoErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{acnoErr}</div>    
                            }    
    
                        </div>  

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
                            <label htmlFor="file">Upload front page of your bank book</label>    
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
    
export default Bank;



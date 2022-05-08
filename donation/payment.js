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


class Payment extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            cvc: '',
            acno: '',
            date: '',
            Address: '',
            emailId: '',    
            bank: 'select',
            type: 'select',    
            phoneNumber: '',    
            document: '',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { cvc,acno,date,type,Address,emailId, bank,amount, phoneNumber,document } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
       //cvc     
    if (!cvc) {    
        formIsValid = false;    
        formErrors["cvcErr"] = "CVC code is required.";    
    }    
     //account number     
        if (!acno) {    
            formIsValid = false;    
            formErrors["acnoErr"] = "Card number is required.";    
        } 
        
        //date    
    if (!date) {    
        formIsValid = false;    
        formErrors["dateErr"] = "Enter your expiry.";    
    }    
    else {    
        var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
        if (!pattern.test(date)) {    
            formIsValid = false;    
            formErrors["dateErr"] = "Invalid expiry";    
        }    
    } 

    
    
    //type  
    if (type=== '' || type=== "select") {    
        formIsValid = false;    
        formErrors["typeErr"] = "Select your card type";    
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
            alert('You have been successfully registered.Please click next option because send a verification code.')    
            this.setState(this.initialState)    
        }    
    } 
    
    
    
    render() { 

        
        
        
                                                                                                                                                                                                                                                                                                                                                
const { cvcErr,acnoErr,dateErr, typeErr} = this.state.formErrors;    
    
    return (    
            
                <div className="formDiv-payment"> 

               <h3 style={{ textAlign: "center" }} >Card Payment </ h3> <br/><br/>  
                <div>  
                    <form onSubmit={this.handleSubmit}> 

                   
                   
                    <div>    
                            <label htmlFor="type">Card Type</label>    
                            <select name="type"    
                                value={this.state.amount}    
                                onChange={this.handleChange}    
                                className={typeErr ? ' typeError' : ''} >    
                                <option class="c" value="select">--Select--</option>    
                                <option class="c" value="master">master card</option>    
                                <option class="c" value="visa">visa card</option>    
                                   
                                   
                            </select>    
                            {typeErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{typeErr}</div>    
                            }    
                        </div> 

<div>    
                            <label htmlFor="acno">Card Number</label>    
                            <input type="text" name="acno"    
                                value={this.state.acno}    
                                onChange={this.handleChange}    
                                placeholder="Enter Your card number"    
                                className={acnoErr ? ' showError' : ''} />    
                            {acnoErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{acnoErr}</div>    
                            }    
    
                        </div> 
                        <div>    
                            <label htmlFor="text">Expiry Date</label>    
                            <input type="text" name="date"    
                                value={this.state.date}    
                                onChange={this.handleChange}    
                                placeholder="MM/YY"    
                                className={dateErr ? ' showError' : ''} />    
                            {dateErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dateErr}</div>    
                            }    
                        </div>  

                    <div>    
                            <label htmlFor="cvc">CVC code</label>    
                            <input type="text" name="cvc"    
                                value={this.state.cvc}    
                                onChange={this.handleChange}    
                                placeholder="Your cvc code"    
                                className={cvcErr ? ' showError' : ''} />    
                            {cvcErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cvcErr}</div>    
                            }    
    
                        </div> 
                         
                        <input type="submit" value="Register"  />
                        
                                <button type="submit" className="btnp"> <a href="./phone">Next </a></button>
                            
                  
                    </form>    
                </div>    
            </div >
            
                
        )    
    }    
}    
    
export default Payment;



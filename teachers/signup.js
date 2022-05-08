import React, { Component } from "react";
import {useState } from 'react';
import '../main/sign.css';


function Signup() {

    const [username, setusername] = useState("");
    const [emailaddress, setemailaddress] = useState("");
    const [createpassword, setcreatepassword] = useState("");
    const [conformpassword, setconformpassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ username, emailaddress, createpassword, conformpassword }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully.Then click signin option.");
             setusername("");
            setemailaddress("");
            setcreatepassword("");
            setconformpassword("");
        }
    }



        return (
            <form>
                <div class="signup">
                <h3 class="forgot">Sign Up</h3>

                <div className="form-group">
                    <label>User-Name</label>
                    <input type="text" className="form-control" placeholder="Enter user name" 
                    value={username} onChange={(e) => setusername(e.target.value)} />
                </div>
                
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    value={emailaddress} onChange={(e) => setemailaddress(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Create Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={createpassword} onChange={(e) => setcreatepassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Conform Password</label>
                    <input type="password" className="form-control" placeholder="Re-enter password"
                    value={conformpassword} onChange={(e) => setconformpassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div>
                <button type="submit" className="btn" onClick={handleOnSubmit}><a>conform </a></button>
                 
                <button type="clear" className="btnc">Clear</button>
                 
             <button type="submit" className="bts"><a href="./sign">signin </a></button>
             </div>

                </div>
            </form>

            

        );
    }

export default Signup;

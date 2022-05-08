import React, { Component } from "react";
import '../main/sign.css';
import './signup.js';
import { useState } from 'react';
import { process_params } from "express/lib/router";

function Sign(props) {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({ username,password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result=="valid") {
            console.log(result);
            props.history.push("/sponsors/spuser");
            
        }
        else if  (result=="Username not exist"){
            alert("invalid user name");
            console.log(result);
            props.history.push("/main/sign");
             
        }
        else if  (result=="Password not valid"){
            alert("invalid  password");
            console.log(result);
            props.history.push("/main/sign");
             
        }
       
        else{
            alert("invalid login");
        }

    }



    return (
        <form align="center">

            <div class="sign">
                <h3 class="forgot">Sign In</h3>

                <div className="form-group">
                    <label>User-Name</label>
                    <input type="text" className="form-control" placeholder="Enter user name"
                        value={username} onChange={(e) => setusername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>


                <div>
                    <button type="submit" className="btn" onClick={handleOnSubmit}>login </button>
                </div>

                <p className="forgot">
                <a href="./fpassword"> forgot_password</a>
                </p> 
            </div>

        </form>
    );
}


export default Sign;
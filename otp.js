import React, { Component } from 'react';
import { render } from 'react-dom';
import '../main/style.css';
import '../main/form.css';
//import './main/main.js';
import CardReactFormContainer from 'card-react';


import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
import { component } from 'react';


function otp (){
  
return(
          
      <body>

<div class="full">


                        <div class="message">
                        <form align="center">
                        <div className="form-group-S">
                            <label>ENTER YOUR VERIFICATION CODE</label>
                            <input type="string" className="form-control" placeholder="Enter your verifcation code" />


                            <div>
                                <button type="submit" className="btn"> Done </button>
                                
                            </div>
                        </div>

                    </form>
                        </div>
                       
          </div>
          
            </body>
            
        );
    }
export default otp;
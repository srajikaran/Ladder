import React, { Component } from 'react';
import { render } from 'react-dom';
import '../main/style.css';
//import './main/main.js';
//import '../main/signup.js';



function Verification() {


    return (

        <body>
            <div class="full">

                <div class="message">

                    <form align="center">
                        <div className="form-group-S">
                            <label>VERIFICATION CODE</label>
                            <input type="password" className="form-control" placeholder="Enter your verification code" />


                            <div>
                                <button type="submit" className="btn"> <a href="./signup">done </a></button>
                            </div>
                        </div>

                    </form>


                </div>

                <div class="bottom"></div>
            </div>
        </body>

    );
}



export default Verification;
import React, { Component } from 'react';
import { render } from 'react-dom';
import '../main/style.css';
//import './main/main.js';

//card

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import '../main/card.css';

//icon//
import { FaWhatsapp } from "react-icons/fa";
import { FaRssSquare } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";


import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
import { component } from 'react';



class Teachers extends React.Component{
    constructor(){
        super();
    }
    render() {

      
      
        return(
          
            <body>
              <div class="full">
<div class="navigation">
<img src={require('../images/2.jpg').default} alt=""/>

   

  <ul>

<li>
  <a href="/home/home">
    Home
  </a>
  </li>

  <li>
  <a href="/about/about">
    About
  </a>
</li>

<li>
  <a href="/blog/blog">
    Blog
  </a>
</li>

<li>
  <a href="/students/students">
    Students
  </a>
</li>

<li>
  <a href="/teachers/teachers">
  <h class="page">Teachers </h>
  </a>
</li>

<li>
  <a href="/sponsors/sponsors">
    Sponsors
  </a>
</li>

<li>
  <a href="/donation/donation">
    Donation
  </a>
</li>
</ul>
</div>

                        <div class="message">

                        <Card class="card-t">

<CardContent>
  <Typography class="typo">
 <h1>You are </h1>
 
  </Typography>
</CardContent>

<CardActions>
<a class="click" href="./sign">
  <button type="submit" className="btnh">Already user</button>
  </a>

  <a class="click" href="./verification">
  <button type="submit" className="btnh">New user</button>
  </a>

  </CardActions>
</Card>
                
      
      </div>
                        
               
      <div class="bottom">
          
          <table >
            <tr>

              <td class="margin1">
              
              <th><h1 color="white"> SOCIAL MEDIAS</h1></th><br />
            

            <a href="https://web.whatsapp.com/"> <FaWhatsapp/>  whatsap</a><br /><br />
            <a href="https://www.facebook.com/viber/photos/a.371154049592106/2676390539068434/"> <FaRssSquare/>  viber</a><br /><br />
            <a  href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com&service=mail"> <FaRegEnvelope/>  email</a><br /><br />
            <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/>  facebook</a><br /><br />
            <a  href="https://www.instagram.com/p/CC3vZMonADY/"> <FaInstagramSquare/>  instagram</a><br /><br />
            <a  href="https://www.linkedin.com/in/sivapalakumar-rajikaran-512820213/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BvmR45gP7Sm6sCz8QTPl8rA%3D%3D">
              <FaLinkedin/>  Linkdin</a><br />
              
              </td>
              

              <td class="margin2">
            
              <th><h1 color="white"> CONTACT DETAILS</h1></th><br/>
              <img class="f-image" src={require('../images/16.jpg')} /> 

            <div> MR.S.Rajikaran, </div>
            <div> LADDER Organization, </div>
            <div> Usan,</div>
            <div>  Mirusuvil,</div>
            <div> Jaffna.</div>
            <div> Contact No:0214578035</div>
          </td>

          <td class="margin3">
            
              <th><h1 color="white"> OUR SERVICE</h1></th><br/>
               
              <a href="/students/stform"> Provide studies to poor students</a><br /><br />
              <a href="/students/stform"> provide thinks to poor students</a><br /><br />
              <a href="/students/stform"> provide money to poor students</a><br /><br />
              <a href="/teachers/tform"> Teachers work opprtunity with salary</a><br /><br />
              <a href="/sponsors/spform"> Give an opportunity for sponsors to help poors</a><br /><br />
            
          </td>
              
              

              </tr> 
            </table>
        </div>
               </div>
            </body>
            
        );
    }

}

export default Teachers;
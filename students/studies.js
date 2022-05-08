import React, { Component } from 'react';
import { render } from 'react-dom';

import '../main/style.css';

//icon//
import { FaWhatsapp } from "react-icons/fa";
import { FaRssSquare } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";





//card
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import '../main/card.css';


//import './main/main.js';
//import { Carousel } from 'react-responsive-carousel';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import { component } from 'react';


class Thinks extends React.Component {
  constructor() {
    super();
  }
  render() {

    

    return (


            <div class="message">

         <h1 class="text-suht"> PLEASE SELECT YOUR SUBJECT </h1>
         <div class="text-sut"> Please go your subject and click facebook option ,you can get your theories , questions , answers and click whatsap option ,you can get teachers discussion. </div>

         //maths//
    <br/> <h1 class="text-suhts"> 1.MATHS </h1><br/>
         
         <table align="center">
              <tr>

         <td>
         
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>MATHS</h1>
         MR.S.KUGAVAANAN
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/> facebook</a>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>CHEMISTRY</h1>
         MR.K.RAAJAN
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/> facebook</a>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>PHYSICS</h1>
         MR.M.KUGARAGAVAN
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/> facebook</a>
				</CardActions>
			</Card>
      
      </td>


      </tr>
      </table>

      //commerce//

      <br/> <h1 class="text-suhts"> 1.COMMERCE </h1><br/>
         
         <table align="center">
              <tr>

         <td>
         
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>BUSINESS STUDIES</h1>
         MR.S.VARATHAN
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/> facebook</a>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>ACCOUNTING</h1>
         MR.V.SUTHAKARAN
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/> facebook</a>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>ECONOMICSS</h1>
         MR.N.THEVAN
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        <a  href="https://www.facebook.com/stories/create/"> <FaFacebook/> facebook</a>
				</CardActions>
			</Card>
      
      </td>


      </tr>
      </table>




      </div>

   );
  }

}

export default Thinks;
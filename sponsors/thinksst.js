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


class Thinksst extends React.Component {
  constructor() {
    super();
  }
  render() {

    

    return (


            <div class="message">

         <h1 class="text-sthink"> YOU CAN CLICK WHATSAP OPTION FOR CONTACT STUDENT  <br/>AND PROVIDE THINKS. </h1><br/><br/>
        
         
    
         <table align="center">
              <tr>

         <td>
         
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>K.KUMARAN. GR 08</h1>
         1. school bag<br/>
         2. shoe
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        
				</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>A.SHAKIYA. GR-11</h1>
         1. Past paper book<br/>
         2. coppies 
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        
				</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>K.HARANSHA. GR-A/L</h1>
         1. School bag

					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        
				</CardActions>
			</Card>
      
      </td>


      </tr>
      </table>

      
         
         <table align="center">
              <tr>

         <td>
         
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>M.ASWIN. GR-01</h1>
         1. Mathematical box<br/>
         2. Color box<br/>
         3. Water bottle
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        	</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>R.THUSWIHA. GR-07</h1>
         1. CR coppies<br/>
         2. Water color
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        		</CardActions>
			</Card>
      
      </td>

      <td>
      
      
<Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>R.RISHAN. GR-05</h1>
         1. scholoship past paper book
					</Typography>
				</CardContent>

				<CardActions>
        <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a><br /><br />
        		</CardActions>
			</Card>
      
      </td>


      </tr>
      </table><br/><br/>


      <h1 class="text-sthink"> Thanks for your wonderfull and kindfull sponsorship. </h1><br/><br/>
        

      </div>

   );
  }

}

export default Thinksst;
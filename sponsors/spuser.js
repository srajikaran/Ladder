import React, { Component } from 'react';
import { render } from 'react-dom';


//icon//
import { FaWhatsapp } from "react-icons/fa";
import { FaRssSquare } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";


import '../main/style.css';

//slide

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../main/slickdemo.css';

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


class Spuser extends React.Component {
  constructor() {
    super();
  }
  render() {

    

    return (


            <div class="message">

         <h1 class="text-suh">WARMLY WELCOME SPONSORS FOR OUR SERVICE </h1><br/><br/>
         
         <table align="center">
              <tr>
              <td>
          
            <div className="image-spu">
            <img class="image" src={require('../images/31.jpg')} />
            </div>
        
         </td>

         <td>
         <div class="text-sut"> Please click (Provide) option then you can select your student to provide sponsorship.You can provide your sponsorship by money or thinks.</div>
          <div>
            
       <Card class="card-su">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">STUDENTS AVAILABLE FOR THINKS</h1>
         
					</Typography>
				</CardContent>

				<CardActions>
        <a class="click" href="/sponsors/thinksst">
          <button type="submit" className="btnh">Provide</button>
          </a>	
          </CardActions>
			</Card>
      </div>
      
			
      <div>
      
			<Card class="card2-su">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">STUDENTS AVAILABLE FOR MONEY</h1>
    
					</Typography>
				</CardContent>

				<CardActions>
        <a class="click" href="/sponsors/moneyst">
          <button type="submit" className="btnh">Provide</button>
          </a>
				</CardActions>
			</Card>
      </div>
      </td>


      </tr>
      </table>
      </div>

   );
  }

}

export default Spuser;
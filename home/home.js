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


class Home extends React.Component {
  constructor() {
    super();
  }
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (


      <div class="full">
        <div class="navigation">
        <img src={require('../images/2.jpg')} />

          <h1 class="heading" >LADDER</h1>   


          <ul>

          <li>
              <a href="/home/home">
              <h class="page">Home </h>
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
                Teachers
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

            <li>
              <a href="/">
              <FiSearch/>
              </a>
            </li>

            <li>
              <a href="/">
              <FiMenu/>
              </a>
            </li>



          </ul>


        </div>

        <div class="message">
          
<h1 class="text-suhh">This website available for help for poor students and other services.</h1>
          <Slider {...settings} >
            <div className="wdt">
            <img class="image" src={require('../images/15.jpg')} />
            </div>

            <div className="wdt">
            <img class="image" src={require('../images/14.jpg')} />
            </div>
            

            <div className="wdt">
            <img class="image" src={require('../images/6.jpg')} />
             </div>

             <div className="wdt">
            <img class="image" src={require('../images/7.jpg')} />
             </div>

          </Slider>

          <div>
            <table align="center">
              <tr>
              <td>
       <Card class="card">

				<CardContent>
					<Typography class="typo">
         <h1>STUDENTS</h1>
         If you are poor student..
					</Typography>
				</CardContent>

				<CardActions>
        <a class="click" href="/students/stform">
          <button type="submit" className="btnh">form</button>
          </a>	
          </CardActions>
			</Card>
      </td>
      
    
      <td>
			<Card class="card1">

				<CardContent>
					<Typography class="typo">
          <h1>TEACHERS</h1>
          If you work with us, as a teacher...
					</Typography>
				</CardContent>

				<CardActions>
        <a class="click" href="/teachers/tform">
          <button type="submit" className="btnh">form</button>
          </a>
				</CardActions>
			</Card>
      </td>


      <td>
			<Card class="card2">

				<CardContent>
					<Typography class="typo">
          <h1>SPONSORS</h1>
          If you work with us, as a sponsor...
					</Typography>
				</CardContent>

				<CardActions>
        <a class="click" href="/sponsors/spform">
          <button type="submit" className="btnh">form</button>
          </a>
				</CardActions>
			</Card>
      </td>


      </tr>
      </table>
      </div>

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



    );
  }

}

export default Home;
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../main/style.css';



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
               <form>

         <h1 class="text-suh">PLEASE SELECT YOUR THINKS </h1>

         
         <table align="center">
              <tr>

         <td>
        <Card class="card-thinks">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">BOOKS</h1>
         
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
      </td>

      <td>
      
			<Card class="card-thinks1">

				<CardContent>
					<Typography class="typo">
          <h1 class="text-su">SCHOOL BAG</h1>
          
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
			<Card class="card-thinks2">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">SHOE</h1>
    
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
    
      </td>


      </tr>
      </table><br/><br/>


      <table align="center">
              <tr>

         <td>
        <Card class="card-thinks3">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">TOOLS BOX</h1>
         
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
      </td>

      <td>
      
			<Card class="card-thinks4">

				<CardContent>
					<Typography class="typo">
          <h1 class="text-su">DRINK BOTTLE</h1>
          
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
			<Card class="card-thinks5">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">COLOUR BOX</h1>
    
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
    
      </td>


      </tr>
      </table><br/><br/>


      <table align="center">
              <tr>

         <td>
        <Card class="card-thinks6">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">PAST PAPER BOOK</h1>
         
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
      </td>

      <td>
      
			<Card class="card-thinks7">

				<CardContent>
					<Typography class="typo">
          <h1 class="text-su">LUNCH BOX</h1>
          
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
      
      </td>

      <td>
      
			<Card class="card-thinks8">

				<CardContent>
					<Typography class="typo-su">
          <h1 class="text-su">PENS</h1>
    
					</Typography>
				</CardContent>

				<CardActions>
        <div className="form-group-thinks">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Select</label>
                    </div>
                </div>
				</CardActions>
			</Card>
    
      </td>


      </tr>
      </table><br/><br/>

      <button type="submit" className="btn-thinks">conform</button>
      </form>
      </div>

   );
  }

}

export default Thinks;
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


class Tuser extends React.Component {
    constructor() {
        super();
    }
    render() {



        return (


            <div class="message">

                <h1 class="text-tuser"> WARMLY WELCOME TEACHERS TO OUR SERVICE </h1>
                <div class="text-sut"> Please go your subject and upload theories,tutorials and videos from that subject. You can contact your students
                when click whatsap option.   </div>

         //maths//
         <div>
                <br /> <h1 class="text-suhts"> 1.MATHS </h1><br />

                <table align="center">
                    <tr>

                        <td>
                        <form>
                            <Card class="card-tuser">
                                <table>
                                    <tr>
                                        <td>
                                            <CardContent>
                                                <Typography class="typo">
                                                    <h1>MATHS</h1>
                                                    Please upload your
                                                </Typography>
                                                <input type="submit" value="Submit" /><br/>
                                                <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a>
        
                                            </CardContent>
                                        </td><td>
                                            <CardActions>
                                                <div>
                                                    <div> <label htmlFor="file">Theories </label>
                                                        <input type="file" name="file" onChange /></div><br />


                                                    <div> <label htmlFor="file">Tutorial </label>
                                                        <input type="file" name="file" onChange /></div><br />


                                                    <div> <label htmlFor="file">Videos </label>
                                                        <input type="file" name="file" onChange /></div> <br />


                                                </div>

                                            </CardActions>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            </form>

                        </td>

                        <td>

                        <form>
                            <Card class="card-tuser">
                                <table>
                                    <tr>
                                        <td>
                                            <CardContent>
                                                <Typography class="typo">
                                                    <h1>CHEMISTRY</h1>
                                                    Please upload your
                                                </Typography>
                                                <input type="submit" value="Submit" /><br/>
                                                <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a>
                                            </CardContent>
                                        </td><td>
                                            <CardActions>
                                                <div>
                                                    <div> <label htmlFor="file">Theories </label>
                                                        <input type="file" name="file" onChange /></div><br />


                                                    <div> <label htmlFor="file">Tutorial </label>
                                                        <input type="file" name="file" onChange /></div><br />


                                                    <div> <label htmlFor="file">Videos </label>
                                                        <input type="file" name="file" onChange /></div> <br />


                                                </div>

                                            </CardActions>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            </form>

                        </td>
                        <td>

                        <form>
                            <Card class="card-tuser">
                                <table>
                                    <tr>
                                        <td>
                                            <CardContent>
                                                <Typography class="typo">
                                                    <h1>PHYSICS</h1>
                                                    Please upload your
                                                </Typography>
                                                <input type="submit" value="Submit" /><br/>
                                                <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a>
                                            </CardContent>
                                        </td><td>
                                            <CardActions>
                                                <div>
                                                    <div> <label htmlFor="file">Theories </label>
                                                        <input type="file" name="file" onChange /></div><br />


                                                    <div> <label htmlFor="file">Tutorial </label>
                                                        <input type="file" name="file" onChange /></div><br />


                                                    <div> <label htmlFor="file">Videos </label>
                                                        <input type="file" name="file" onChange /></div> <br />


                                                </div>

                                            </CardActions>
                                        </td>
                                    </tr>
                                </table>
                            </Card>
                            </form>

                        </td>


                    </tr>
</table>
</div>

      //commerce//
      <div>

                    <br /> <h1 class="text-suhts"> 2.COMMERCE </h1><br />

                    <table align="center">
                        <tr>

                            <td>
                            <form>
                                <Card class="card-tuser">
                                    <table>
                                        <tr>
                                            <td>
                                                <CardContent>
                                                    <Typography class="typo">
                                                        <h1>BUSINESS STUDIES</h1>
                                                        Please upload your
                                                    </Typography>
                                                    <input type="submit" value="Submit" /><br/>
                                                <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a>
                                                </CardContent>
                                            </td><td>
                                                <CardActions>
                                                    <div>
                                                        <div> <label htmlFor="file">Theories </label>
                                                            <input type="file" name="file" onChange /></div><br />


                                                        <div> <label htmlFor="file">Tutorial </label>
                                                            <input type="file" name="file" onChange /></div><br />


                                                        <div> <label htmlFor="file">Videos </label>
                                                            <input type="file" name="file" onChange /></div> <br />


                                                    </div>

                                                </CardActions>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                                </form>

                            </td>

                            <td>

                            <form>
                                <Card class="card-tuser">
                                    <table>
                                        <tr>
                                            <td>
                                                <CardContent>
                                                    <Typography class="typo">
                                                        <h1>ACCOUNTING</h1>
                                                        Please upload your
                                                    </Typography>
                                                    <input type="submit" value="Submit" /><br/>
                                                <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a>
                                                </CardContent>
                                            </td><td>
                                                <CardActions>
                                                    <div>
                                                        <div> <label htmlFor="file">Theories </label>
                                                            <input type="file" name="file" onChange /></div><br />


                                                        <div> <label htmlFor="file">Tutorial </label>
                                                            <input type="file" name="file" onChange /></div><br />


                                                        <div> <label htmlFor="file">Videos </label>
                                                            <input type="file" name="file" onChange /></div> <br />


                                                    </div>

                                                </CardActions>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                                </form>

                            </td>

                            <td>

                            <form>
                                <Card class="card-tuser">
                                    <table>
                                        <tr>
                                            <td>
                                                <CardContent>
                                                    <Typography class="typo">
                                                        <h1>ECONOMICS</h1>
                                                        Please upload your
                                                    </Typography>
                                                    <input type="submit" value="Submit" /><br/>
                                                <a href="https://web.whatsapp.com/"> <FaWhatsapp/> whatsap</a>
                                                </CardContent>
                                            </td><td>
                                                <CardActions>
                                                    <div>
                                                        <div> <label htmlFor="file">Theories </label>
                                                            <input type="file" name="file" onChange /></div><br />


                                                        <div> <label htmlFor="file">Tutorial </label>
                                                            <input type="file" name="file" onChange /></div><br />


                                                        <div> <label htmlFor="file">Videos </label>
                                                            <input type="file" name="file" onChange /></div> <br />


                                                    </div>

                                                </CardActions>
                                            </td>
                                        </tr>
                                    </table>
                                </Card>
                                </form>

                            </td>


                        </tr>
                    </table>



                    </div>

                    <div class="text-sut"> Teachers, A lot of thanks for your sincere works. Please click (Bank-details) button 
                    because you want fill your bank details for your monthly salary.
          </div>
          <a class="click" href="./bank">
          <button type="submit" className="btn-bank">Bank-details</button>
          </a>
            </div>


        );
    }

}

export default Tuser;
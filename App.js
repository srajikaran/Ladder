import React, { Component } from 'react';
import { render } from 'react-dom';
import './main/style.css';
import Home from './home/home';
import click5 from './home/hform';
import About from './about/about';
import Blog from './blog/blog';
import Students from './students/students';
import Teachers from './teachers/teachers';
import Sponsors from './sponsors/sponsors';

import click4st from './students/verification';
import click4sp from './sponsors/verification';
import click4t from './teachers/verification';

import Donation from './donation/donation';
import click1 from './students/stform';
import click2 from './teachers/tform';

import donest from './students/signup';
import donesp from './sponsors/signup';
import donet from './teachers/signup';

import conformst from './students/sign';
import conformsp from './sponsors/sign';
import conformt from './teachers/sign';

import login from './students/suser';

import fpassst from './students/fpassword';
import fpasssp from './sponsors/fpassword';
import fpasst from './teachers/fpassword';

import thinks from './students/thinks';
import studies from './students/studies';
import money from './students/money';

import tuser from './teachers/tuser';
import bank from './teachers/bank';
import spuser from './sponsors/spuser';
import thinksst from './sponsors/thinksst';
import moneyst from './sponsors/moneyst';
import spform from './sponsors/spform';
import payment from './donation/payment';
import phone from './donation/phone';
import otp from './donation/otp';






import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
import { component } from 'react';



class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (

            <body>

                <div>


                    <Route exact path="/" component={Home} />


                    <Route exact path="/students/stform" component={click1} />
                    <Route exact path="/teachers/tform" component={click2} />
                    <Route exact path="/home/hform" component={click5} />


                    <Route exact path="/home/home" component={Home} />
                    <Route exact path="/about/about" component={About} />
                    <Route exact path="/blog/blog" component={Blog} />
                    <Route exact path="/students/students" component={Students} />


                    <Route exact path="/students/signup" component={donest} />
                    <Route exact path="/sponsors/signup" component={donesp} />
                    <Route exact path="/teachers/signup" component={donet} />

                    <Route exact path="/students/sign" component={conformst} />
                    <Route exact path="/sponsors/sign" component={conformsp} />
                    <Route exact path="/teachers/sign" component={conformt} />

                    <Route exact path="/students/suser" component={login} />

                    <Route exact path="/students/fpassword" component={fpassst} />
                    <Route exact path="/sponsors/fpassword" component={fpasssp} />
                    <Route exact path="/teaches/fpassword" component={fpasst} />

                    <Route exact path="/students/thinks" component={thinks} />
                    <Route exact path="/students/studies" component={studies} />
                    <Route exact path="/students/money" component={money} />


                    <Route exact path="/teachers/teachers" component={Teachers} />
                    <Route exact path="/sponsors/sponsors" component={Sponsors} />

                    <Route exact path="/students/verification" component={click4st} />
                    <Route exact path="/sponsors/verification" component={click4sp} />
                    <Route exact path="/teachers/verification" component={click4t} />

                    <Route exact path="/donation/donation" component={Donation} />
                    <Route exact path="/teachers/tuser" component={tuser} />
                    <Route exact path="/teachers/bank" component={bank} />
                    <Route exact path="/sponsors/spuser" component={spuser} />
                    <Route exact path="/sponsors/thinksst" component={thinksst} />
                    <Route exact path="/sponsors/moneyst" component={moneyst} />
                    <Route exact path="/sponsors/spform" component={spform} />
                    <Route exact path="/donation/payment" component={payment} />
                    <Route exact path="/donation/phone" component={phone} />
                    <Route exact path="/donation/otp" component={otp} />
                    


                </div>
            </body>

        );
    }

}

export default App; 
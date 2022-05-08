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
import click4 from './sponsors/spform';
import Donation from './donation/donation';
import click3 from './donation/donation';
import click1 from './students/stform';
import click2 from './teachers/tform';
import done from './main/signup';
import conform from './main/sign';





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

                    <div>
                        <Route exact path="/students/stform" component={click1} />
                        <Route exact path="/teachers/tform" component={click2} />
                        <Route exact path="/donation/donation" component={click3} />
                        <Route exact path="/home/hform" component={click5} />
                   </div>

                    <Route exact path="/home/home" component={Home} />
                    <Route exact path="/about/about" component={About} />
                    <Route exact path="/blog/blog" component={Blog} />
                    <Route exact path="/students/students" component={Students} />

                       <div>
                            <Route exact path="/main/signup" component={done} />
                       </div>

                              <div>
                                  <Route exact path="/main/sign" component={conform} />
                              </div>


                    <Route exact path="/teachers/teachers" component={Teachers} />
                    <Route exact path="/sponsors/sponsors" component={Sponsors} />

                              <div>
                                  <Route exact path="/sponsors/spform" component={click4} />
                              </div>

                    <Route exact path="/donation/donation" component={Donation} />

                </div>
            </body>

        );
    }

}

export default App; 
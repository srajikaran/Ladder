import react from 'react'
import Link from 'react-router-dom'
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

function NavBar(){
    return (

        <ul>

        <li> <Link to="/" > Home </Link></li>
        <li> <Link to="/about"> About </Link></li>
        <li> <Link to="/blog"> Blog </Link></li>
        <li> <Link to="/students" > Students </Link></li>
        <li> <Link to="/teachers" > Teachers </Link></li>
        <li> <Link to="/sponsors" > Sponsors </Link></li>
        <li> <Link to="/donation" > Donation </Link></li>

        </ul>
    );

}
export default NavBar;
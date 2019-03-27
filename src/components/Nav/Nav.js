import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                Navbar
                <Link to='/'>Home</Link>
            </nav>
        );
    }
}
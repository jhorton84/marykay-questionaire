import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className='component Home'>
                Home Component
                <Link to='/appointments'><button>Start</button></Link>
            </div>
        );
    }
}
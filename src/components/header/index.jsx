import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import GympassLogo from '../../assets/images/gympass-logo.svg';

class Footer extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <Link to="/">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        Hugo Cicarelli's Github API Connect
                    </Link>
                </div>
            </header>
        );
    }
}

export default (Footer);
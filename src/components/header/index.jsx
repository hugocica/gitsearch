import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import GympassLogo from '../../assets/images/gympass-logo.svg';

class Footer extends Component {
    render() {
        return (
            <header>
                <Link to="/">
                    Logo
                </Link>
            </header>
        );
    }
}

export default (Footer);
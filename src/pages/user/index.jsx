import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import UserInfos from '../../components/user-info';
import ListRepositories from '../../components/list-repos';

class UserPage extends Component {
    render() {       
        const username = ( typeof this.props.match.params.userName !== typeof undefined ) ? this.props.match.params.userName : null;

        return(
            <div className="App">
                <Header />

                <div className="container">
                    <UserInfos user={username} />

                    <ListRepositories user={username} />
                </div>

                <Footer />
            </div>
        );

    }
}

export default UserPage;
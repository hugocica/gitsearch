import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {requestUsersSearch} from '../../actions/users';
import TextField from '@material-ui/core/TextField';
import ListUsers from '../../components/list-users';

class RepoPage extends Component {
    render() {
        const { listingUsers, fetchingUsers } = this.props;
       
        return(
            <div className="App">
                <Header />

                <div className="container">
                   teste
                </div>

                <Footer />
            </div>
        );

    }
}

const mapStateProps = (state) => {
    return {
        listingUsers: state.users.userInfos,
        fetchingUsers: state.users.fetching
    }
}

export default connect(mapStateProps, {requestUsersSearch})(RepoPage);
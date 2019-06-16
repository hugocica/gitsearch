import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {requestUsersSearch} from '../../actions/users';
import RepoInfos from '../../components/repo-info';

class RepoPage extends Component {
    render() {       
        const userName = ( typeof this.props.match.params.userName !== typeof undefined ) ? this.props.match.params.userName : null;
        const repoName = ( typeof this.props.match.params.repoName !== typeof undefined ) ? this.props.match.params.repoName : null;

        return(
            <div className="App">
                <Header />

                <div className="container">
                   <RepoInfos user={userName} repo={repoName} />
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
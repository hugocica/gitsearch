import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {requestUsersSearch} from '../../actions/users';
import TextField from '@material-ui/core/TextField';
import ListUsers from '../../components/list-users';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            orderby: 'name'
        }

        this.searchForUsers = this.searchForUsers.bind(this);
    }

    // função responsável por fazer consulta no GitHub por usuários
    searchForUsers = event => {        
        let usersQuery = event.target.value;
        
        if ( usersQuery !== this.state.query ) {

            this.setState({ query: usersQuery });
            this.props.requestUsersSearch(usersQuery);
            
        }
        
    }

    render() {
        const { listingUsers, fetchingUsers } = this.props;
        
        return(
            <div className="App">
                <Header />

                <div className="container">
                    <TextField
                        id="users-query"
                        label="Search for Github users"
                        type="search"
                        className="input-text"
                        margin="normal"
                        variant="outlined"
                        onBlur={this.searchForUsers}
                    />

                    <ListUsers list={listingUsers} query={this.state.query} fetching={fetchingUsers} />
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

export default connect(mapStateProps, {requestUsersSearch})(IndexPage);
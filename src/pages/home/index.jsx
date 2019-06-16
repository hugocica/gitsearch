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

        const user = JSON.parse(localStorage.getItem('userQuery'));        

        this.state = {
            query: ( user !== null ) ? user : 'Hugo Cicarelli',
            orderby: 'name'
        }

        this.searchForUsers = this.searchForUsers.bind(this);
    }

    // função responsável por fazer consulta no GitHub por usuários
    searchForUsers = event => {        
        let usersQuery = event.target.value;     
        
        if ( event.keyCode === 13 ) {

            localStorage.setItem('userQuery', JSON.stringify(usersQuery));

            this.props.requestUsersSearch(usersQuery);
            
        }
        
    }

    handleChange = event => {
        let usersQuery = event.target.value;     
        this.setState({ query: usersQuery });
        
    }

    componentDidMount() {
        if ( this.state.query !== '' ) {
            this.props.requestUsersSearch(this.state.query);
        }
    }

    render() {
        const { listingUsers, fetchingUsers } = this.props;
        
        return(
            <div className="App">
                <Header />

                <div className="container main-container">
                    <TextField
                        id="users-query"
                        label="Search for Github users"
                        type="search"
                        className="input-text"
                        margin="normal"
                        variant="outlined"
                        onKeyUp={this.searchForUsers}
                        onChange={this.handleChange}
                        value={this.state.query}
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
        listingUsers: state.users.usersInfos,
        fetchingUsers: state.users.fetching
    }
}

export default connect(mapStateProps, {requestUsersSearch})(IndexPage);
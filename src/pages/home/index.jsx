import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LoadingRequisition from '../../components/loading';
import {requestUsersSearch} from '../../actions/users';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderby: 'name'
        }
    }

    render() {
        const { users } = this.props;

        if ( users.length > 0 ) {
            return(
                <div className="App">
                    <Header />

                    <div className="container">
                        
                    </div>

                    <Footer />
                </div>
            );
        } else {
            return(
                <div className="App">
                    <Header />

                    <div className="container">
                        <TextField
                            id="outlined-search"
                            label="Search field"
                            type="search"
                            className="input-text"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <Footer />
                </div>
            );
        }

    }
}

const mapStateProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateProps, {requestUsersSearch})(IndexPage);
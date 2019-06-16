import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoadingRequisition from '../../components/loading';
import {requestRepositories} from '../../actions/repos';
import { Link } from 'react-router-dom';

class ListRepositories extends Component {
    componentWillMount() {
        const { user } = this.props;
        
        this.props.requestRepositories(user)
    }

    renderRepositories = () => {
        const { repositories, fetching, user } = this.props;
        

        if ( fetching ) {

            return <LoadingRequisition />;

        } else {

            if ( repositories.length > 0 ) {
    
                return repositories.map((item, key) => {
                    console.log(item)
                    return <li className="list-item" key={`repos-${key}`}>
                        <Link to={`/user/${user}/repository/${item.name}`}>

                            {item.name}
                        </Link>
                    </li>
                });
    
            } else {
                return <h2>No repository was found.</h2>
            }

        }
    }

    render() {
        return(
            <ul className="list-container">
                {this.renderRepositories()}
            </ul>
        );
    }
}

const mapStateProps = (state) => {    
    return {
        repositories: state.repos.reposList,
        fetching: state.repos.fetching
    }
}

export default connect(mapStateProps, {requestRepositories})(ListRepositories);
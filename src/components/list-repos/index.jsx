import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoadingRequisition from '../../components/loading';
import {requestRepositories} from '../../actions/repos';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class ListRepositories extends Component {
    /**
     * Antes de renderizar o componente, a API do Github é consultada, retornando todos os repositórios de um determinado usuário
     */
    componentWillMount() {
        const { user } = this.props;
        
        this.props.requestRepositories(user)
    }

    /**
     * Função que renderiza toda a lista de repositórios que retornou
     */
    renderRepositories = () => {
        const { repositories, fetching, user } = this.props;
        

        if ( fetching ) {

            return <LoadingRequisition />;

        } else {

            if ( repositories.length > 0 ) {
    
                return repositories.map((item, key) => {
                    
                    return <ListItem button className="list-item" key={`repos-${key}`}>
                            <div className="meta-content">
                                <div className="content">
                                    <p>Repo Name: {item.name}</p>
                                    <p>{ ( item.description !== null ) ? `Description: ${item.name}` : `` }</p>
                                    <p>Stars: {item.stargazers_count}</p>
                                    <p>Language: {item.language}</p>
                                </div>
                                <Button variant="contained" color="primary" className="btn-link" href={item.html_url}>
                                    Go to repository
                                </Button>
                            </div>
                            <Button
                                component={Link}
                                variant="contained"
                                to={`/user/${user}/repository/${item.name}`}
                            >
                                See latest commits
                                <Icon>add</Icon>
                            </Button>
                        </ListItem>
                });
    
            } else {
                return <h2>No repository was found.</h2>
            }

        }
    }

    render() {
        return(
            <List component="nav" aria-label="Secondary mailbox folders" className="list-container repos">
                {this.renderRepositories()}
            </List>
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
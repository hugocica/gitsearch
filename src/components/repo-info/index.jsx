import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestCommits} from '../../actions/repos';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LoadingRequisition from '../../components/loading';

/**
 * Componente responsável por mostrar informações referentes a um determinado repositório, como commits etc
 */
class RepoInfos extends Component {
    componentWillMount() {
        // requestCommits: busca na API do Github as informações dos commits referentes a um determinado repositório.
        // É necessário passar o usuário em si, e o repositório que irá buscar
        this.props.requestCommits(this.props.user, this.props.repo);
    }

    /**
     * Renderiza as informações referentes aos commits que foram retornados
     */
    renderInfo = () => {

        const { commits, fetching } = this.props;        
        
        if ( commits.length !== 0 && !fetching ) {
            
            return commits.map((item, key) => {
                return <ListItem className="commits-item" key={`commit-${key}`}>
                    <p className="commit-message">
                        <strong>Message: </strong>    
                        {item.commit.message}
                    </p>
                    <p className="commit-author">
                        <strong>Author: </strong>
                        {item.commit.author.name}
                    </p>
                    <p className="commit-date">
                        <strong>Date of commit: </strong>
                        {item.commit.author.date}
                    </p>
                </ListItem>
            })

        } else if ( fetching ) {
            
            return <LoadingRequisition />

        }

    }

    render() {
        
        return (
            <div className="repo-info-wrapper">
                {/*
                <div className="repo-info">
                    <div className="section-title">Repository Infos</div>
                </div>
                */}

                <div className="repo-commits-wrapper">
                    <h2 className="section-title">
                        Repository commits
                    </h2>

                    <List component="nav" aria-label="Secondary mailbox folders" className="commits-container">
                        {this.renderInfo()}
                    </List>
                </div>
            </div>
        );
            
    }
}

const mapStateProps = (state) => {    
    return {
        commits: state.repos.commits,
        fetching: state.repos.fetching
    }
}

export default connect(mapStateProps, {requestCommits})(RepoInfos);
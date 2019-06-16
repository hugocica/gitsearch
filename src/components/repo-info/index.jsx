import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestCommits} from '../../actions/repos';

class RepoInfos extends Component {
    componentWillMount() {
        this.props.requestCommits(this.props.user, this.props.repo);
    }

    renderInfo = () => {

        const { commits, fetching } = this.props;        
        
        if ( commits.length !== 0 && !fetching ) {
            
            return commits.map((item, key) => {
                return <li className="commits-item" key={`commit-${key}`}>
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
                </li>
            })


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

                    <ul className="commits-container">
                        {this.renderInfo()}
                    </ul>
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
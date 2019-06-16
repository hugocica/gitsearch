import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestUserInfo} from '../../actions/users';

/**
 * Componente responsável por renderizar a lista de usuários, que vieram do resultado da busca feita
 * 
 * Ao clicar em um usuário, será redirecionado para uma página contendo os repositórios desse usuário, bem como informações pertinentes
 * Na listagem é apenas mostrado o avatar do usuário e seu nome de usuário
 */
class UserInfos extends Component {
    componentWillMount() {
        this.props.requestUserInfo(this.props.user);
    }

    renderInfo = () => {

        const { userInfo, fetching } = this.props;        
        
        if ( userInfo.length !== 0 && !fetching ) {
            
            return <div className="user-info">
                <div className="img-wrapper">
                    <img src={userInfo.avatar_url} className="user-avatar" alt={`${userInfo.login}'s Github avatar`}/>
                </div>
                <div className="meta-content">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="user-name">{userInfo.name}</p>
                            <p className="user-email">{userInfo.email}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="user-following">
                                <strong>Following: </strong>
                                {userInfo.following}
                            </p>
                            <p className="user-followers">
                                <strong>Followers: </strong>
                                {userInfo.followers}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="user-bio">
                            <strong>Bio: </strong>
                            {userInfo.bio}
                        </p>
                    </div>
                </div>
            </div>


        }

    }

    render() {
        
        return (
            <div className="info-container">
                {this.renderInfo()}
            </div>
        );
            
    }
}

const mapStateProps = (state) => {    
    return {
        userInfo: state.users.userInfo,
        fetching: state.users.fetching
    }
}

export default connect(mapStateProps, {requestUserInfo})(UserInfos);
import React, { Component } from 'react';
import LoadingRequisition from '../../components/loading';
import { Link } from 'react-router-dom';

/**
 * Componente responsável por renderizar a lista de usuários, que vieram do resultado da busca feita
 * 
 * Ao clicar em um usuário, será redirecionado para uma página contendo os repositórios desse usuário, bem como informações pertinentes
 * Na listagem é apenas mostrado o avatar do usuário e seu nome de usuário
 */
class ListUsers extends Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    /**
     * Função que renderiza a lista de usuários em si, percorrendo os usuário que retornaram da busca
     */
    renderList = () => {        
        // caso a busca houver retornado
        if ( typeof this.props.list !== typeof undefined && this.props.list.total_count > 0  ) {
                
                return this.props.list.items.map((item, key) => {
                    return <div className="list-item" key={`user-${key}`}>
                        <Link to={{
                            pathname: "/user/"+ item.login,
                            state: {
                                userChosen: item.login
                            }
                        }}>
                        <img className="avatar" src={item.avatar_url} alt=""/>
                        <h2 className="user-name">{item.login}</h2>
                    </Link>
                    </div>
                });

        } else {

            return <div className="list-item">
                    <h2>No user was found</h2>
                </div>;

        }
    }

    /**
     * Caso não esteja no meio da requisição da API do GitHub, mostra a lista.
     * Caso esteja no meio da requisição, mostra uma animação de loading
     */
    render() {
        const { query, list, fetching } = this.props;
        
        if ( fetching ) {
            return <LoadingRequisition />;
        }
        
        
        if ( list.length !== 0 && query !== '' ) {

            return (
                <div className="list-container">
                    {this.renderList()}
                </div>
            );

        } else {

            return <p></p>;

        }
            

    }
}

export default ListUsers;
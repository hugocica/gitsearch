import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ListUsers from '../../components/list-users';
import {requestUsersSearch} from '../../actions/users';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class IndexPage extends Component {
    constructor(props) {
        super(props);

        // consulta o localStorage para ver se tem algum valor salvo (buscas anteriores)
        // caso tenha alguma consulta, retornar com o valor dela preenchido
        // caso não tenha nenhum valor, retornar com o meu nome, para Exemplo de funcionamento.
        const user = JSON.parse(localStorage.getItem('userQuery'));        

        this.state = {
            query: ( user !== null ) ? user : 'Hugo Cicarelli',
            orderby: 'name'
        }

        this.searchForUsers = this.searchForUsers.bind(this);
    }

    // função responsável por fazer consulta no GitHub por usuários
    searchForUsers = () => {        
        let usersQuery = document.querySelector('#users-query').value;     
     
        localStorage.setItem('userQuery', JSON.stringify(usersQuery));
        this.props.requestUsersSearch(usersQuery);
        
    }

    /**
     * Dá um trigger na consulta na API quando é pressionado Enter, dentro do input de busca
     */
    handleEnterPress = event => {
        if ( event.keyCode === 13 ) {

            this.searchForUsers();
            
        }
    }

    /**
     * atualiza o valor do estado 'query', para que permita que o valor dentro do input seja alterado 
     * (caso contrário, ele permitiria o mesmo valor sempre, não permitindo que escrevesse um novo valor)
     */
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
                    <div className="search-wrapper">
                        <TextField
                            id="users-query"
                            label="Search for Github users"
                            type="search"
                            className="input-text"
                            margin="normal"
                            variant="outlined"
                            onKeyUp={this.handleEnterPress}
                            onChange={this.handleChange}
                            value={this.state.query}
                        />
                        <Button variant="contained" color="primary" className="btn" id="search-button" onClick={this.searchForUsers}>
                            <Icon style={{ marginRight: 5 }}>search</Icon>
                            Search
                        </Button>
                    </div>

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
import {
    FETCH_REPOS,
    FETCH_REPO,
    FETCH_COMMITS,
    REQUEST_LOADING_REPOS,
    REQUEST_REJECTED_REPOS
} from './action';
import axios from '../../utils/axios';

/**
 * Lista todos os repositórios de um determinado usuário
 */
export function requestRepositories(_user, _sort = 'updated') {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('users/'+ _user +'/repos?sort='+ _sort)
            .then(response => dispatch(fetchRepositories(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

/**
 * Bate no endpoint do Github no qual é possível pegar as informações de todos os commits de um repositório
 */
export function requestCommits(_user, _repo) {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('repos/'+ _user +'/'+ _repo +'/commits')
            .then(response => dispatch(fetchCommits(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

/**
 * Bate no endpoint do Github no qual é possível pegar as informações de de um determinado repositório
 */
export function requestRepoInfo(_user, _repo) {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('repos/'+ _user +'/'+ _repo +'/commits')
            .then(response => dispatch(fetchRepository(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_REPOS
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_REPOS,
        payload: response
    };
}

function fetchRepositories(response) {
    return {
        type: FETCH_REPOS,
        payload: response
    };
}

function fetchRepository(response) {
    return {
        type: FETCH_REPO,
        payload: response
    };
}

function fetchCommits(response) {
    return {
        type: FETCH_COMMITS,
        payload: response
    };
}
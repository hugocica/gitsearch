import {
    FETCH_REPOS,
    REQUEST_LOADING_REPOS,
    REQUEST_REJECTED_REPOS
} from './action';
import axios from '../../utils/axios';

export function requestRepositories(_user, _sort = 'updated') {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('users/'+ _user +'/repos?sort='+ _sort)
            .then(response => dispatch(fetchRepositories(response.data)))
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

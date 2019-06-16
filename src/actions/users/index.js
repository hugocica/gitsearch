import {
    FETCH_LIST_USERS,
    FETCH_USER_INFO,
    REQUEST_LOADING_LIST_USERS,
    REQUEST_REJECTED_LIST_USERS
} from './action';
import axios from '../../utils/axios';

export function requestUsersSearch(_query, _order = 'desc') {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('search/users?q='+ _query +'&order='+ _order)
            .then(response => dispatch(fetchUsersSearch(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestUserInfo(_user) {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('users/'+ _user)
            .then(response => dispatch(fetchUserInfo(response.data)))
            .catch(error => dispatch(requestRejected(error.message)))
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_LIST_USERS
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_LIST_USERS,
        payload: response
    };
}

function fetchUsersSearch(response) {
    return {
        type: FETCH_LIST_USERS,
        payload: response
    };
}

function fetchUserInfo(response) {
    return {
        type: FETCH_USER_INFO,
        payload: response
    }
}

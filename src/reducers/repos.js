import {
    FETCH_REPOS,
    FETCH_COMMITS,
    REQUEST_LOADING_REPOS,
    REQUEST_REJECTED_REPOS
} from '../actions/repos/action';

const INITIAL_STATE = {
    reposList: [],
    commits: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_REPOS:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_REPOS:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_REPOS:
            return {
                ...state,
                reposList: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_COMMITS:
            return {
                ...state,
                commits: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}

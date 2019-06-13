import axios from 'axios';

// https://api.github.com/users/hugocica
axios.defaults.baseURL = 'https://api.github.com/';

export default axios;
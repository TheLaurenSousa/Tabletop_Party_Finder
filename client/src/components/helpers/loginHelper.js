import axios from 'axios';

const loginHelper = (user) => {
    return axios.post('http://localhost:8000/login', user)
}

export default loginHelper;
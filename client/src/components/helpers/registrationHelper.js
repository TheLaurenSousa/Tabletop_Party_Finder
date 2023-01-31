import axios from 'axios';

const registrationHelper = (user) => {
    return axios.post('http://localhost:8000/user/create', user)
}

export default registrationHelper;
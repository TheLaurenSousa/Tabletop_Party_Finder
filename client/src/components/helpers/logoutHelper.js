import axois from 'axios';

const logoutProcess = (user) => {
    return axois.get('http://localhost:8000/logout');
}

export default logoutProcess;
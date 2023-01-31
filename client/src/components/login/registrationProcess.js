// import React, { useState } from 'react';
// import registrationHelper from '../helpers/registrationHelper';
// import { useNavigate } from 'react-router-dom';

// const RegistrationProcess = props => {
//     const user = props;
//     const [ error, setErrors ] = useState([props]);
//     const navigate = useNavigate();

//     registrationHelper(user)
//         .then((res) => {
//             if (res.data.message === "Success!"){
//                 localStorage.setItem('username', res.data.user.username);
//                 localStorage.setItem('id', res.data.user._id);
//                 navigate('/home');
//             } else {
//                 const errorResponse = res.data.errors;
//                 const errorArr = [];
//                 for (const key of Object.keys(errorResponse)) {
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 setErrors(errorArr);
//             }
//         });
// }

// export default RegistrationProcess;
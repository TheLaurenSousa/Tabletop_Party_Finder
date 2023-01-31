// import React, { useState } from 'react';
// import loginHelper from "../helpers/loginHelper";
// import { useNavigate } from "react-router-dom";

// const LoginProcess = user => {
//     const navigate = useNavigate();
//     const [ errors, setErrors ] = useState([]);

//     loginHelper(user)
//         .then(res => {
//             if (res.data.message === "Success!"){
//                 localStorage.setItem('username', res.data.user.username);
//                 localStorage.setItem('id', res.data.user._id);
//                 navigate('/home');
//             } else {
//                 const errorResponse = res.data;
//                 const errorArr = [];
//                 for (const key of Object.keys(errorResponse)) {
//                     errorArr.push(errorResponse[key])
//                 }
//                 setErrors(errorArr);
//             }
//         });
// }

// export default LoginProcess;
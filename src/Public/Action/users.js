import axios from 'axios';

export const login = data => {
  return {
    type: 'LOGIN',
    payload: axios.post('http://192.168.43.134:8080/login', data),
  };
};

export const register = data => {
  return {
    type: 'REGISTER',
    payload: axios.post('http://192.168.43.134:8080/register', data),
  };
};

// export const logout = () => {
//   return {
//     type: 'LOGOUT',
//   };
// };

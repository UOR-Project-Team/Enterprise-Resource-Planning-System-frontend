// authUtils.js (or any appropriate name)
import { jwtDecode } from 'jwt-decode';

export const Usertoken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token);
    return {
      userid : decodedToken.userid,
      username: decodedToken.username,
      fullname: decodedToken.fullname,
      email: decodedToken.email,
      nic: decodedToken.nic,
      jobrole: decodedToken.jobrole,
      contactno: decodedToken.contactno,
      address: decodedToken.address,
      city: decodedToken.city,
      loginflag: decodedToken.loginflag,
      // Add other properties as needed
    };
  }
  return null; // Or handle accordingly if the token doesn't exist or is invalid
};
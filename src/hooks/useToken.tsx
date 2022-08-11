// import { useState } from 'react';

// export default function useToken() {
//   const getToken = () => {
//     const tokenString = localStorage.getItem('token');
//     const userToken = JSON.parse(tokenString as string);
//     return userToken?.token
//   };

//   const [token, setToken] = useState<string>(getToken());

//   const saveToken = (userToken) => {
//     localStorage.setItem('token', JSON.stringify(userToken));
//     setToken(userToken.token);
//   };

//   return {
//     setToken: saveToken,
//     token
//   }
// }

export {}
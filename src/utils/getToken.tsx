export const getToken = ():string => {
    const userToken = localStorage.getItem('token');
    const tokenString = JSON.parse(userToken as string);
    return tokenString.token;
};
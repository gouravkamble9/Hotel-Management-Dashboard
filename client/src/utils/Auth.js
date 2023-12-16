import { AUTH_TOKEN } from "./constant";

export const isAuthenticated = () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return token ? true : false;
  };

  export const getToken=()=>{
    return localStorage.getItem(AUTH_TOKEN)
  }


  export const setToken = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
  
 
  export const removeToken = () => {
    localStorage.removeItem(AUTH_TOKEN);
  };
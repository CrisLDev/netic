/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
import axios from 'axios';
import Cookies from 'js-cookie';
import { ILoginData, IRegisterData } from '../Interfaces/AuthInterface';

export const setToken = async ( token:string ):Promise<void> => {
  const threeHours = new Date( new Date().getTime() + 180 * 60 * 1000 );
  Cookies.set( 'Authorization', token, {
    expires: threeHours,
  });
};

export const getToken = ():string | undefined => {
  return Cookies.get( 'Authorization' );
};

const API = 'http://localhost:4000/api';
export const registerNewUser = async ( data:IRegisterData ):Promise<any> => {
  return await axios.post<IRegisterData>( `${API}/userAuth`, data );
};

export const deleteUser = async ( id:string ):Promise<any> => {
  return await axios.delete( `${API}/userAuth/${id}` );
};

export const getUserToken = async ( token:string | undefined ):Promise<any> => {
  if ( token ) {
    axios.defaults.headers.common.Authorization = `beader ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const loginUser = async ( data:ILoginData ):Promise<any> => {
  return await axios.post( `${API}/loginAuth`, data );
};

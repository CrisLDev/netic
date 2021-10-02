/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
import axios from 'axios';

const API = 'https://elnetic.herokuapp.com/api';
export const chatOpenService = async (
  userId:string | undefined,
):Promise<any> => {
  const user = {
    user: userId,
  };
  return axios.post( `${API}/chat`, user );
};

/* export const registerNewUser = async ( data:IRegisterData ):Promise<any> => {
  return await axios.post<IRegisterData>( `${API}/userAuth`, data );
}; */

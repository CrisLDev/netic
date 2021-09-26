/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
import axios from 'axios';
import { IUser } from '../Interfaces/UsersInterface';

const API = 'http://localhost:4000/api';
export const getAllUsers = async ():Promise<any> => {
  return await axios.get<IUser>( `${API}/allUser` );
};

export const getMe = async ():Promise<any> => {
  return await axios.get<IUser>( `${API}/me` );
};

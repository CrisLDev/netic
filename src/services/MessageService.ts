/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */

import axios from 'axios';
import { MessageInterface } from '../Interfaces/MessageInterface';

const API = 'https://elnetic.herokuapp.com/api';
/* const API = 'http://localhost:4000/api'; */
export const entreMessage = async ( data:MessageInterface ):Promise<any> => {
  return await axios.post<MessageInterface>( `${API}/newmensaje`, data );
};

export const getMessageById = async ( chatId:string ):Promise<any> => {
  const chat = {
    chatId,
  };
  return await axios.post<MessageInterface>( `${API}/mensaje`, chat );
};

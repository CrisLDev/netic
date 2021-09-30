import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { MessageInterface } from '../../Interfaces/MessageInterface';
import { entreMessage, getMessageById } from '../../services/MessageService';
import { RootState } from '../Store';

export const actionTypes = {
  MESSAGE: 'MESSAGE',
  MESSAGELOA: 'MESSAGELOA',
  REALTIME: 'REALTIME',
};

export interface UserState{
  message:[];
}

const initialState:UserState = {
  message: [],
};

export default function usersReducer( state = initialState, action:any ):any {
  const { type, payload } = action;

  switch ( type ) {
    case actionTypes.MESSAGE:

      return {
        ...state,
        message: [...state.message, payload],
      };
    case actionTypes.MESSAGELOA:

      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
}

export const action = {
  messageLoad: ( payload:[]):AnyAction => ({
    type: actionTypes.MESSAGELOA,
    payload,
  }),
  messagenew: ( payload:[]):AnyAction => ({
    type: actionTypes.MESSAGE,
    payload,
  }),
  messageTimeReal: ( payload:[]):AnyAction => ({
    type: actionTypes.MESSAGE,
    payload,
  }),
};

export const loadeMessage = ( id:string ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  const message = await getMessageById( id );
  dispatch( action.messageLoad( message.data.messages ));
};

export const newMessage = ( message:MessageInterface | any ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  const savedMessage = await entreMessage( message );

  dispatch( action.messagenew( savedMessage.data ));
};

export const newMessageRecived = ( message:MessageInterface | any ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  dispatch( action.messageTimeReal( message ));
};

import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getToken, getUserToken } from '../../services/AuthServices';
import { chatOpenService } from '../../services/ChatService';
import { RootState } from '../Store';

export const actionTypes = {
  CLOSE: 'CLOSE',
  ACTIVECHAT: 'ACTIVECHAT',
};

export interface UserState{
  close:boolean;
  activeChat:any [];
}

const initialState:UserState = {
  close: false,
  activeChat: [],
};

export default function usersReducer( state = initialState, action:any ):any {
  const { type, payload } = action;

  switch ( type ) {
    case actionTypes.CLOSE:
      return {
        ...state,
        close: payload,
      };
    case actionTypes.ACTIVECHAT:
      return {
        ...state,
        activeChat: [payload],
      };

    default:
      return state;
  }
}

export const action = {
  closeChat: ( payload:boolean ):AnyAction => ({
    type: actionTypes.CLOSE,
    payload,
  }),
  activeChat: ( payload:any[]):AnyAction => ({
    type: actionTypes.ACTIVECHAT,
    payload,
  }),
};

export const closeChats = ( data:boolean ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  dispatch( action.closeChat( data ));
};

export const chatOpen = ( data:string | undefined ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  const token = getToken();
  getUserToken( token );
  const res = await chatOpenService( data );
  // eslint-disable-next-line no-console
  console.log( typeof ( res ));
  dispatch( action.activeChat( res.data.chat ));
  dispatch( closeChats( false ));
};

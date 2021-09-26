import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getToken, getUserToken } from '../../services/AuthServices';
import { getAllUsers, getMe } from '../../services/UsersServices';
import { RootState } from '../Store';

export const actionTypes = {
  LOADING: 'LOADING',
  LOADINGME: 'LOADINGME',
  USER: 'USER',
  ME: 'ME',
};

export interface UserState{
  loading:boolean;
  loadme:boolean;
  loaduser:[];
  me:[];
}

const initialState:UserState = {
  loading: true,
  loadme: true,
  loaduser: [],
  me: [],
};

export default function usersReducer( state = initialState, action:any ):any {
  const { type, payload } = action;

  switch ( type ) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: payload,
      };
    case actionTypes.LOADINGME:
      return {
        ...state,
        loadme: payload,
      };
    case actionTypes.USER:
      return {
        ...state,
        loaduser: payload,
      };
    case actionTypes.ME:
      return {
        ...state,
        me: payload,
      };
    default:
      return state;
  }
}

export const action = {
  loaduser: ( payload:[]):AnyAction => ({
    type: actionTypes.USER,
    payload,
  }),
  loading: ( payload:boolean ):AnyAction => ({
    type: actionTypes.LOADING,
    payload,
  }),
  loadingme: ( payload:boolean ):AnyAction => ({
    type: actionTypes.LOADINGME,
    payload,
  }),
  loadme: ( payload:[]):AnyAction => ({
    type: actionTypes.ME,
    payload,
  }),
};

export const getUsers = ( ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  const token = getToken();
  getUserToken( token );
  const res = await getAllUsers();
  dispatch( action.loaduser( res.data ));
  dispatch( action.loading( false ));
};

export const me = ():
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  const token = getToken();
  getUserToken( token );
  const res = await getMe();
  dispatch( action.loadme( res.data ));
  dispatch( action.loadingme( false ));
};

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
  ACTIVEUSER: 'ACTIVEUSER',
  INITIAL: 'INITIAL',
};

export interface UserState{
  loading:boolean;
  loadme:boolean;
  loaduser:[];
  me:[];
  activeuser:[];
}

const initialState:UserState = {
  loading: true,
  loadme: true,
  loaduser: [],
  me: [],
  activeuser: [],
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
    case actionTypes.ACTIVEUSER:
      // eslint-disable-next-line no-case-declarations
      const act = state.activeuser.filter(
        ( user:any ) => user.idUser === payload.idUser,
      );

      if ( act.length === 0 ) {
        return {
          ...state,
          activeuser: [...state.activeuser, payload],
        };
      }
      return {
        ...state,
      };

    case actionTypes.INITIAL:
      // eslint-disable-next-line no-case-declarations
      const change = state.activeuser.filter(
        ( user:any ) => user.idUser !== payload.idUser,
      );
      if ( change.length > 0 ) {
        return {
          ...state,
          activeuser: change,
        };
      }
      return {
        ...state,
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
  userconnect: ( payload:[]):AnyAction => ({
    type: actionTypes.ACTIVEUSER,
    payload,
  }),
  initial: ( payload:[]):AnyAction => ({
    type: actionTypes.INITIAL,
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

export const active = ( connect:any ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  dispatch( action.userconnect( connect ));
};

export const desconect = ( initial:any ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:any ) => {
  dispatch( action.initial( initial ));
};

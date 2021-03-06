import { toast } from 'react-toastify';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ILoginData, IRegisterData } from '../../Interfaces/AuthInterface';
import {
  loginUser, registerNewUser, setToken,
} from '../../services/AuthServices';
import { RootState } from '../Store';

export const actionTypes = {
  LOADING: 'LOADING',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOAD_USER: 'LOAD_USER',
};

export interface AuthState{
  loading:boolean;
  autheticated:boolean;
  registerSuccess:boolean;
}

const initialState:AuthState = {
  loading: false,
  autheticated: false,
  registerSuccess: false,
};

export default function authReducer( state = initialState, action:AnyAction ):any {
  const { type, payload } = action;

  switch ( type ) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: payload,
      };
    case actionTypes.LOAD_USER:
      return {
        ...state,
        autheticated: payload,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: payload,
      };
    default:
      return state;
  }
}

export const actions = {
  putLoading: ( payload:boolean ):AnyAction => ({
    type: actionTypes.LOADING,
    payload,
  }),
  AuthSucces: ( payload:boolean ):AnyAction => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload,
  }),
  registerFail: ():AnyAction => ({
    type: actionTypes.REGISTER_FAIL,
  }),
  loadUser: ( payload:boolean ):AnyAction => ({
    type: actionTypes.LOAD_USER,
    payload,
  }),
};

export const register = ( data:IRegisterData ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:Dispatch ) => {
  try {
    dispatch( actions.putLoading( true ));
    await registerNewUser( data );
    dispatch( actions.putLoading( false ));
    toast.success( 'register success' );
  } catch ( error ) {
    dispatch( actions.registerFail());
    toast.error( 'register Fail' );
  }
};

export const authLogin = ( data:ILoginData ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:Dispatch ) => {
  try {
    dispatch( actions.putLoading( true ));
    const response = await loginUser( data );
    setToken( response.data.token );
    dispatch( actions.putLoading( false ));
    dispatch( actions.AuthSucces( true ));
    toast.success( 'login success' );
  } catch ( error ) {
    dispatch( actions.registerFail());
    toast.error( 'login Fail' );
  }
};

export const authSaved = ( data:boolean ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:Dispatch ) => {
  dispatch( actions.AuthSucces( data ));
};

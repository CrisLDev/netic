import { toast } from 'react-toastify';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IRegisterData } from '../../Interfaces/AuthInterface';
import { registerNewUser, setToken } from '../../services/AuthServices';
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
}

const initialState:AuthState = {
  loading: false,
  autheticated: false,
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
    default:
      return state;
  }
}

export const actions = {
  putLoading: ( payload:boolean ):AnyAction => ({
    type: actionTypes.LOADING,
    payload,
  }),
  registerSuccess: ():AnyAction => ({
    type: actionTypes.REGISTER_SUCCESS,
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
  /* const config = {
    headers: { 'Content-Type': 'application/json' },
  }; */

  try {
    dispatch( actions.putLoading( true ));
    const response = await registerNewUser( data );
    setToken( response.data.token );
    dispatch( actions.putLoading( false ));
    dispatch( actions.registerSuccess());
    toast.success( 'register success' );
  } catch ( error ) {
    dispatch( actions.registerFail());
    toast.error( 'register Fail' );
  }
};

export const reloadUser = ( data:IRegisterData ):
ThunkAction<
void, RootState, null, AnyAction
> => async ( dispatch:Dispatch ) => {
  
  try {
    
  } catch ( error ) {
    
  }
};

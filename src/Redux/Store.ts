import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AuthReducer from './ducks/AuthDucks';

const rootReducer = combineReducers({
  auth: AuthReducer,
});
export default function generateStore():any {
  const store = createStore( rootReducer,
    composeWithDevTools( applyMiddleware( thunk )));
  return store;
}

export type RootState = ReturnType<typeof rootReducer>

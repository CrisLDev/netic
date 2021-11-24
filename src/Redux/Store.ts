import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AuthReducer from './ducks/AuthDucks';
import UserReducer from './ducks/getUsersDuncks';
import chatReducer from './ducks/ChatDunks';
import messageReducer from './ducks/messageDunks';

const rootReducer = combineReducers({
  auth: AuthReducer,
  users: UserReducer,
  chat: chatReducer,
  message: messageReducer,
});
export default function generateStore():any {
  const store = createStore( rootReducer,
    composeWithDevTools( applyMiddleware( thunk )));
  return store;
}

export type RootState = ReturnType<typeof rootReducer>

import { ServerStreamFileResponseOptionsWithError } from 'http2';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

export interface IRoute {
  path: string;
  view: any | any[];
  name: ServerStreamFileResponseOptionsWithError;
  privadeView: boolean;
}

export const routeList: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    view: Home,
    privadeView: false,
  },
  {
    path: '/register',
    name: 'Register',
    view: Register,
    privadeView: true,
  }, {
    path: '/login',
    name: 'Login',
    view: Login,
    privadeView: true,
  },
];

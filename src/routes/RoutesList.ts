import { ServerStreamFileResponseOptionsWithError } from 'http2';
import Home from '../views/Home/Home';

export interface IRoute {
  path: string;
  view: any | any[];
  name: ServerStreamFileResponseOptionsWithError;
}

export const routeList: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    view: Home,
  },
];

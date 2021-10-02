import io from 'socket.io-client';

const socket = io( 'https://elnetic.herokuapp.com/', {
  withCredentials: true,
});

export default socket;

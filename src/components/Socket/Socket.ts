import io from 'socket.io-client';

const socket = io( 'http://localhost:4000', {
  withCredentials: true,
});

socket.on( 'ping', () => {
  // eslint-disable-next-line no-console
  console.log( 'ping' );
});

export default socket;

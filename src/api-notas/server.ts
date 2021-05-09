
import * as net from 'net';
import { RequestType, ResponseType } from './types';
import { addTodo} from './commands';
import { MessageEventEmitterClient } from '../ejercicio-pe102/eventEmitterClient';

function todoFields(request: RequestType, titleIn: boolean, bodyIn: boolean, colorIn: boolean): boolean {
  if (titleIn && typeof request.title !== 'string') {
    return false;
  }
  if (bodyIn && typeof request.body !== 'string') {
    return false;
  }
  if (colorIn && typeof request.color !== 'string') {
    return false;
  }
  return true;
}

function processRequest(request: RequestType): ResponseType {
  if (typeof request.type === 'string' && typeof request.user === 'string') {
    if (request.type == 'add') {
        if (todoFields(request, true, true, true)) {
          return addTodo(request);
        } else {
          return { type: 'error', success: false};
        }
    } else {
      return { type: 'error', success: false};
    }
  } else {
    return { type: 'error', success: false};
  }
}

const server = net.createServer((connection) => {
  const listener = new MessageEventEmitterClient(connection);
  listener.on('request', (request: RequestType) => {
    const response = processRequest(request);
    connection.write(JSON.stringify(response));
    connection.end();
  });
});

server.listen(60300);
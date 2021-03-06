import * as net from 'net';
import { RequestType, ResponseType } from './types';
import { addTodo} from './commands';
import { MessageEventEmitterClient } from '../ejercicio-pe102/eventEmitterClient';

/**
 * Función todoFields, maneja las peticiones y si se introducen correctamente los tipos de atributos
 * para el manejo de nota, comprobando que sean de tipo string
 * @param request petición del servidor 
 * @param titleIn titulo entrante a revisar de la nota
 * @param bodyIn cuerpo entrante a revisar de la nota
 * @param colorIn color entrante a revisar de la nota
 * @returns true si se cumple que todos los anteriores atributos de la petición son tipo string
 */
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

/**
 * Función processRequest procesa los tipos de peticiones, por ahora intentadas add
 * añadir notas
 * @param request petición al servidor
 * @returns respuesta al añadido de la nota por petición en caso contrario se impondrá que no fue
 * satisfactorio con success: false, un atributo de la respuesta de servidor que indica a modo de
 * localizador de errores
 */
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

/**
 * En la siguiente parte se crea un servidor que está escuchando
 * y escribiendo todas las respuesta con respecto a la peticiones que
 * se realizan para ello se escribirán en notas.json con las que se 
 * trabajará
 */
const server = net.createServer((connection) => {
  const listener = new MessageEventEmitterClient(connection);
  listener.on('request', (request: RequestType) => {
    const response = processRequest(request);
    connection.write(JSON.stringify(response));
    connection.end();
  });
});

server.listen(60300);
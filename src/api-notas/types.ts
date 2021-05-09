import { TodoCollection } from "./notes/todoCollection"

/**
 * @type Color, contiene los colores de las notas
 */
export type Color = {
    color: 'red' | 'blue' | 'green' | 'yellow';
}

/**
 * @type RequestType atributos de petición de notas al servidor
 * type: atributo con la acción a realizar con las notas
 * user: usuario de la nota
 * title: titulo de la nota
 * body: cuerpo de la nota
 * color: color de la nota definido por los tipos de colores permitidos
 */
export type RequestType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list';
  user: string;
  title: string;
  body?: string;
  color?: Color;
}

/**
 * @type ResponseType atributos de respuesta del servidor a la gestión de notas
 * type: acción realizada a la que se responde
 * success: boolean que indica si se realizó la acción correctamente(true) o no(false)
 * notes: atributo que tiene las colecciones de notas
 */
export type ResponseType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list' | 'error';
  success: boolean;
  notes?: TodoCollection[];
}

import { loadTodo, saveTodo, getTodoByName, getTodoColor } from './notes/todoCollection';
import * as yargs from 'yargs';
import chalk from "chalk";
import { RequestType, ResponseType } from './types';
import * as net from 'net';

/**
 * Función addTodo, añade la nota como una petición al servidor
 * @param request petición al servidor
 * @returns el añadir una nota guardándola con la función saveTodo pero antes
 * confirmando que corresponde con el usuario, título y el color, en otro caso
 * no será posible notificando error con success: false
 */
export function addTodo(request: RequestType): ResponseType {
    let userTodo = loadTodo(parseInt(request.user));
    if (!getTodoByName(request.title, userTodo)) {
        let color = request.color;
        if (color) {
        saveTodo(request.user);
        return {success: true, type: 'add'};
        } 
        else{
            return {success: false, type:'add'}
        }
    } else{
        return {success: false, type:'add'}
    }
}




/**
 * Yargs.command = add
 * Se añade las notas con un formato similar a:
 * add --user="edusegre" --title="Red note" --body="This is a red note" --color="red"
 */
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    user: {
      describe: 'Notes owner',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      const color = getTodoColor(argv.color);
      if(color) {
        const request: RequestType = {
          type: 'add',
          user: argv.user,
          title: argv.title,
          body: argv.body,
          color: color
        };
        // cliente conectará al puerto de escucha del servidor
        // y escribirá el .json correspondiente a la nota que se añada
        const client = net.connect({port: 60300});
        client.write(JSON.stringify(request) + '\0');

        // se almacena dicha acción de la petición
        let wholeData = '';
        client.on('data', (dataChunk) => {
          wholeData += dataChunk;
        });

        // Esto hasta que el cliente señalice el fin de dicha petición
        client.on('end', () => {
          const response: ResponseType = JSON.parse(wholeData);
          if(response.success) {
            console.log(chalk.green('New note added!'));
          } else {
            console.log(chalk.red('No added...'));
          }
        });
      } else {
        console.log(chalk.red('Invalid color'));
      }
    } else {
      console.log(chalk.red('It is necesary to give all the arguments'));
    }
  },
});



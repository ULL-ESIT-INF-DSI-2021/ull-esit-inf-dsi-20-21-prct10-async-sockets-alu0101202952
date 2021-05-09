
import { loadTodo, saveTodo, getTodoByName, getTodoColor } from './notes/todoCollection';
import * as yargs from 'yargs';
import chalk from "chalk";
import { RequestType, ResponseType } from './types';
import * as net from 'net';



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
 * @api Yarg for the command add
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
        const client = net.connect({port: 60300});
        client.write(JSON.stringify(request) + '\0');

        let wholeData = '';
        client.on('data', (dataChunk) => {
          wholeData += dataChunk;
        });
        
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



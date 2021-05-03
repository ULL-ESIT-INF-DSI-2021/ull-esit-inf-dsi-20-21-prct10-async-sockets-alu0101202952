import * as net from 'net';
//import {watchFile} from 'fs';
import {spawn} from 'child_process';

if (process.argv.length !== 3) {
  console.log('Please, provide a filename.');
} else {
  const path = process.argv[2];

  net.createServer((connection) => {
    console.log('A client has connected.');

    
    
    // Recibe la petición
    connection.on("data", (command) => {
        const ls = spawn('ls', [path]);
        let result = '';
        ls.stdout.on('data', (chunk) => (result += chunk));

        connection.write(JSON.stringify({'data': command, 'dir': path}) +
      '\n');

    });

    connection.end();
    /*
    watchFile(fileName, (curr, prev) => {
      connection.write(`Size of file ${fileName} was ${prev.size}.\n`);
      connection.write(`Size of file ${fileName} now is ${curr.size}.\n`);
    });*/
    
    connection.on('close', () => {
      console.log('A client has disconnected.');
    });
  }).listen(60300, () => {
    console.log('Waiting for clients to connect.');
  });
}
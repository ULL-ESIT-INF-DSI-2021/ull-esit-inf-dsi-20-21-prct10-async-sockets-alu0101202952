import {EventEmitter} from 'events';
import {spawn} from 'child_process';
import {access, constants} from 'fs';

export class MessageEventEmitterClient extends EventEmitter {
    constructor(connection: EventEmitter) {
        super();
    
        let wholeData = '';
        connection.on('data', (dataChunk) => {
            wholeData += dataChunk;

            let messageLimit = wholeData.indexOf('\n');
            while (messageLimit !== -1) {
                const message = wholeData.substring(0, messageLimit);
                wholeData = wholeData.substring(messageLimit + 1);
                this.emit('message', JSON.parse(message));
                messageLimit = wholeData.indexOf('\n');
            }
        });
    }

    lsDirectory(path: string) {
        access(path, constants.F_OK, (err) => {
            if (err) {
                console.log(`Path ${path}, does not exist`);
            } else {
                // Para listar con ls hace falta la función spawn y los childprocess
                const ls = spawn('ls', [path]);
                let result = '';
                ls.stdout.on('data', (chunk) => (result += chunk));
                ls.on('close', () => {
                    console.log(result);
                });
            }
        });
    }
}
const EventEmitter = require('events');

const uuid = require('uuid');


class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), message: msg});
    }
}

// module.exports = Logger; 
// The following used to be in index.js. the above line used to be not commented out
const Logger = require('./logger');
const fs = require('fs');
const path = require('path');

const logger = new Logger();

console.log(path.join(__dirname, '/reference/test', 'logger.log'));
logger.on('message', (data) => fs.appendFile(path.join(__dirname, '/reference/test', 'logger.log'), 
                            'id: ' + data.id + ' message: '+data.message + '\r\n', 
                            function(err) {
                                if(err) throw err; 
                            }));

logger.log('Hello World');
logger.log('test');
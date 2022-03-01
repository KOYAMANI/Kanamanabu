const { createLogger, transports } = require('winston');

const logger = createLogger({
    level: 'debug',
    transports:[
        new transports.Console(),
        // new transports.File({filename: 'app.log'})
    ]
});

module.exports = logger;

// log levels
// logger.error('error')
// logger.warn('warn')
// logger.info('info')
// logger.verbose('verbose')
// logger.debug('debug')
// logger.silly('silly')
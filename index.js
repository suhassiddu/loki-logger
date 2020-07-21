const winston = require('winston')
const { format, transports, createLogger } = winston;
const { timestamp, colorize, printf, errors } = format;
const { Console } = transports;

const winstonOptions = {
    exitOnError: false,
    colorize: false,
    transports: [
        new Console({
            handleExceptions: true
        })
    ],
    format: format.combine(
        errors({ stack: true }),
	format.splat(),
	format.json(),
        timestamp(),
        colorize(),
        printf(({ level, message, timestamp, stack }) => {
            if (stack) {
                return `${level}: ${stack}`;
            }
            return `${level}: ${message}`;
        }),
    )
}

const logger = createLogger(winstonOptions);

module.exports = logger

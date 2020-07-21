# loki-logger

loki-logger is the wrapper for the winston, with the required configuration for the loki.

### sample code
```
const logger = require('loki-logger')
// for logging errors
try{
  throw Error('Handled Error')
} catch(err){
  logger.error(err)
}

// for debugging, use below pattern for concating objects to the message
logger.debug('debugging object: %o', {hi: 'hello'})
```

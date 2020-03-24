import config from "./config/env";
import app from './config/express';

if (config.env === "test") {
    app.listen(process.env.PORT || config.port, () => console.log(`Server Started On Port ${config.port} (${config.env})`));
} else {
    // listen on port config.port
    app.listen(process.env.PORT || config.port, () => console.log(`Server Started On Port ${config.port} (${config.env})`));
}

console.log('=================Port===================');
console.log( config.port );
console.log('=================Env===================');
console.log( config.env );
console.log('=================Port===================');

export default app;
import config from "./config/env";
import app from './config/express';

if (config.env === "test") {
    app.listen(process.env.PORT || config.default.port, () => console.log(`Server Started On Port ${config.default.port} (${config.default.env})`));
} else {
    // listen on port config.port
    app.listen(process.env.PORT || config.default.port, () => console.log(`Server Started On Port ${config.default.port} (${config.default.env})`));
}

console.log('=================Port===================');
console.log( config.default.port );
console.log('=================Env===================');
console.log( config.default.env );
console.log('=================Port===================');

export default app;
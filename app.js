const Hapi = require('hapi');
const configureRoutes = require('./src/routes');

const hostname = 'localhost';
const port = 3000;

const server = new Hapi.Server();
server.connection({
    host: hostname,
    port: port
});

let options = {
    reporters: {
        consoleReporter: [{
            module: 'good-console',
            args: [{ log: '*', response: '*' }]
        }, 'stdout']
    }
};

server.register({ register: require('good'), options }, err => {
    if(err){
        server.error(`Something went wrong, can't start server.`);
    } else {
        const routes = configureRoutes();
        server.route(routes);
        server.start(() => console.log(`Server running at ${hostname}:${port}`));
    }
});
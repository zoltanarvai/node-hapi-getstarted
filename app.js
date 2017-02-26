const Hapi = require('hapi');

const hostname = 'localhost';
const port = 3000;

const server = new Hapi.Server();
server.connection({
    host: hostname,
    port: port
});

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => reply('Welcome to Contacts Manager API')
    }
];

server.route(routes);

server.start(()=> console.log(`Server running at ${hostname}:${port}`));


const configureRoutes = () => {
    return [
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                reply('Welcome to Contacts Manager API')
            }
        },
        {
            method: 'GET',
            path: '/contacts/{id}',
            handler: (request, reply) => {
                reply('Return a contact')
            }
        },
        {
            method: 'GET',
            path: '/contacts',
            handler: (request, reply) => {
                reply('Return all contacts')
            }
        },
        {
            method: 'POST',
            path: '/contacts',
            handler: (request, reply) => {
                reply('Create new contact')
                    .code(201)
            }
        },
        {
            method: 'PUT',
            path: '/contacts/{id}',
            handler: (request, reply) => {
                reply('Update an existing contact')
            }
        },
        {
            method: 'DELETE',
            path: '/contacts/{id}',
            handler: (request, reply) => {
                reply('Delete an existing contact')
                    .code(204)
            }
        }
    ]
};

module.exports = configureRoutes;
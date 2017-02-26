const contactsController = require('../controllers/contactsController');

const configureRoutes = () => {

    return [
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => reply('Welcome to Contacts Manager API')
        },
        {
            method: 'GET',
            path: '/contacts/{id}',
            handler: contactsController.getContact
        },
        {
            method: 'GET',
            path: '/contacts',
            handler: contactsController.getContacts
        },
        {
            method: 'POST',
            path: '/contacts',
            handler: contactsController.createContact
        },
        {
            method: 'PUT',
            path: '/contacts/{id}',
            handler: contactsController.updateContact
        },
        {
            method: 'DELETE',
            path: '/contacts/{id}',
            handler: contactsController.deleteContact
        }
    ]
};

module.exports = configureRoutes;
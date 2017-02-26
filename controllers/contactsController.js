const getContact = (request, reply) => {
    return reply('Return a contact');
};

const getContacts = (request, reply) => {
    return reply('Return all contacts');
};

const createContact = (request, reply) => {
    return reply('Create new contact')
        .code(201);
};

const updateContact = (request, reply) => {
    return reply('Update an existing contact');
};

const deleteContact = (request, reply) => {
    return reply('Delete an existing contact')
        .code(204);
};

module.exports = {
    getContact,
    getContacts,
    updateContact,
    createContact,
    deleteContact
};
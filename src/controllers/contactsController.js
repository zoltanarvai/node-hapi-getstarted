const ContactsRepository = require('../repositories/inMemoryContactsRepo');
const contactService = require('../services/contactsService');
const Boom = require('Boom');
const contactsRepo = new ContactsRepository(); //==>Dummy repo for now

const getContact = (request, reply) => {
    const id = request.params.id;

    contactService
        .getContact(id, contactsRepo.getContact)
        .then(contact => reply(contact))
        .catch(error => {
            if(error.code === 'NoSuchContact'){
                return reply(Boom.notFound('Contact not found', error));
            }else{
                return reply(Boom.badImplementation('Failed to get contact', error));
            }
        });
};

const getContacts = (request, reply) => {
    contactService
        .getContacts(contactsRepo.getContacts)
        .then(contacts => reply(contacts))
        .catch(error => reply(Boom.badImplementation('Failed to get contacts', error)));
};

const createContact = (request, reply) => {
    const contact = request.payload;

    contactService
        .addContact(contact, contactsRepo.addContact)
        .then(contact => reply(contact).code(201))
        .catch(error => reply(Boom.badImplementation('Failed to get contact', error)));
};

const updateContact = (request, reply) => {
    const id = request.params.id;
    const contact = request.payload;

    contactService
        .updateContact(id, contact, contactsRepo.updateContact)
        .then(() => reply())
        .catch(error => {
            if(error.code === 'NoSuchContact'){
                return reply(Boom.notFound('Contact not found', error));
            }else{
                return reply(Boom.badImplementation('Failed to update contact', error));
            }
        });
};

const deleteContact = (request, reply) => {
    const id = request.params.id;

    contactService
        .removeContact(id, contactsRepo.removeContact)
        .then(reply().code(204))
        .catch(error => {
            if(error.code === 'NoSuchContact'){
                return reply(Boom.notFound('Contact not found', error));
            }else{
                return reply(Boom.badImplementation('Failed to delete contact', error));
            }
        });
};

module.exports = {
    getContact,
    getContacts,
    updateContact,
    createContact,
    deleteContact
};
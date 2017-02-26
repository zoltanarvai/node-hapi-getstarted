const ContactsRepository = require('./inMemoryContactsRepo');
const contactService = require('./contactsService');
const contactsRepo = new ContactsRepository(); //==>Dummy repo for now

const getContact = (request, reply) => {
    const id = request.params.id;

    contactService
        .getContact(id, contactsRepo.getContact)
        .then(contact => reply(contact));
};

const getContacts = (request, reply) => {
    contactService
        .getContacts(contactsRepo.getContacts)
        .then(contacts => reply(contacts))
};

const createContact = (request, reply) => {
    const contact = request.payload;

    contactService
        .addContact(contact, contactsRepo.addContact)
        .then(contact => reply(contact).code(201))
};

const updateContact = (request, reply) => {
    const id = request.params.id;
    const contact = request.payload;

    contactService
        .updateContact(id, contact, contactsRepo.updateContact)
        .then(() => reply())
};

const deleteContact = (request, reply) => {
    const id = request.params.id;

    contactService
        .removeContact(id, contactsRepo.removeContact)
        .then(reply().code(204))
};

module.exports = {
    getContact,
    getContacts,
    updateContact,
    createContact,
    deleteContact
};
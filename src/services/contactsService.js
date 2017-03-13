const toContact = (persistedContact) => {
    if(persistedContact){
        return {
            id: persistedContact._id,
            firstName: persistedContact.firstName,
            lastName: persistedContact.lastName,
            age: persistedContact.age
        };
    }else{
        throw {
            message: 'Contact cannot be null or undefined',
            code: 'NoSuchContact'
        }
    }
};

const getContact = (id, loadById) => {
    console.log('Returning a list of contact')
    return loadById(id).then(toContact);
};

const getContacts = (load) => {
    console.log('Returning a list of contact')
    return load().then(persistedContacts => persistedContacts.map(toContact))
};

const addContact = (contact, save) => {
    const newContact = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        age: contact.age
    };

    return save(newContact)
};

const updateContact = (id, contact, update) => {
    const updatedContact = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        age: contact.age
    };

    return update(id, updatedContact)
};

const removeContact = (id, remove) => {
    return remove(id)
};

module.exports = {
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
};
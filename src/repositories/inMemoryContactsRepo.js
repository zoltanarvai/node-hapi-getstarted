const uuidV1 = require('uuid/v1');
const { asPromise } = require('../utils');


module.exports = class ContactsRepo {
    constructor(contacts = []){
        this.contacts = contacts;
        this.getContact = this.getContact.bind(this);
        this.getContacts = this.getContacts.bind(this);
        this.addContact = this.addContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
    }

    getContact(id) {
        const contactFound = this.contacts.find(contact => contact._id === id);
        return asPromise(null, contactFound);
    }

    getContacts(){
        return asPromise(null, this.contacts);
    }

    addContact(newContact){
        const id = uuidV1();
        const contactToAdd = {
            _id: id,
            firstName: newContact.firstName,
            lastName: newContact.lastName,
            age: newContact.age
        };

        this.contacts.push(contactToAdd);
        return asPromise(null, {id});
    }

    updateContact(id, updatedContact){
        const contactToUpdate = this.contacts.find(contact => contact._id === id);
        if(contactToUpdate){
            contactToUpdate.firstName = updatedContact.firstName;
            contactToUpdate.lastName = updatedContact.lastName;
            contactToUpdate.age = updatedContact.age;

            return asPromise();
        }else{
            return asPromise({
                message: `Can't find contact with id: ${id}`,
                code: 'NoSuchContact'
            }, null)
        }
    }

    removeContact(id){
        const indexToRemove = this.contacts.indexOf(contact => contact._id == id);
        if(indexToRemove !== -1){
            this.contacts.splice(indexToRemove, 1);
            return asPromise();
        }else{
            return asPromise({
                message: `Can't find contact with id: ${id}`,
                code: 'NoSuchContact'
            }, null)
        }
        

    }
};
//to run: ./node_modules/mocha/bin/mocha ./test/specs/ test/**/*.spec.js
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const contactsService = require('../../../src/services/contactsService');
const { asPromise } = require('../../../src/utils');

chai.should();
chai.use(chaiAsPromised);


describe('When getting all contacts', () => {
    it("should return an empty array if there are no contacts", () => {

        //Easy to inject logic to get from store since getContacts is actually a pure function
        const loadFromStore = () => asPromise(null, []);

        //Easy way to test promises using chai-as-promised
        return contactsService
            .getContacts(loadFromStore)
            .should.eventually.be.empty;
    });

    it("should return a list of contacts when multiple contacts exist", () => {
        const loadFromStore = () => asPromise(null, [
            {
                _id: 'id1',
                firstName: 'John',
                lastName: 'Doe',
                age: 30
            },
            {
                _id: 'id2',
                firstName: 'Jane',
                lastName: 'Doe',
                age: 28
            }
        ]);

        return contactsService
            .getContacts(loadFromStore)
            .should.eventually.deep.equal([
                {
                    id: 'id1',
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30
                },
                {
                    id: 'id2',
                    firstName: 'Jane',
                    lastName: 'Doe',
                    age: 28
                }
            ]);
    });

    it("should return firstName, lastName, age properties only and normalized id", () => {
        //Easy to inject logic to get from store since getContacts is actually a pure function
        const loadFromStore = () => asPromise(null, [
            {
                _id: 'id1',
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                v: 'zzz'
            }
        ]);

        return contactsService
            .getContacts(loadFromStore)
            .should.eventually.deep.equal([
                {
                    id: 'id1',
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30
                }
            ]);
    })
});
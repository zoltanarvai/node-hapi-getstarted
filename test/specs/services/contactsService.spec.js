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
});
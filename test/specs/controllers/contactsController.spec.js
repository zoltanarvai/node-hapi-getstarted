const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const contactsController = require('../../../src/controllers/contactsController');
const contactsService = require('../../../src/services/contactsService');
const { asPromise } = require('../../../src/utils');

chai.use(sinonChai)

describe('When requesting GetContacts', () => {
	it("should return empty array if no contacts are available", (done) => {
		sinon.stub(contactsService, 'getContacts', () => asPromise(null,[]))
		const reply = sinon.spy();
		contactsController.getContacts({},reply)
		.then(() => {
			reply.should.have.been.calledWith([]);
			done();	
		});

		contactsService.restore();
	});
});
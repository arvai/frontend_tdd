var assert = require('chai').assert,
	sinon = require('sinon'),
	Backbone = require('backbone'),
	testContent = require('./content/testcontent.html'),

	Chat = require('../../libs/Chat/view');

suite('Testing Backbone Chat', function() {
	setup(function() {
		Backbone.$('#sandbox').html(testContent);

		sinon.spy(Chat.prototype, 'onBtnClick');
		sinon.spy(Chat.prototype, 'addMessage');

		this.chat = new Chat({
			el : '#sandbox'
		});
	});

	teardown(function() {
		Chat.prototype.onBtnClick.restore();
		Chat.prototype.addMessage.restore();

		this.chat.messages = [];
	});

	test('Test - if sendBtn triggers its event', function() {
		Backbone.$(this.chat.ui.sendBtn).trigger('click');

		assert.isTrue(this.chat.onBtnClick.calledOnce);
	});

	test('Test - if valid message is stored', function() {
		var testMessage = 'Hi dude.';

		Backbone.$(this.chat.ui.msgInput).val(testMessage);
		Backbone.$(this.chat.ui.sendBtn).trigger('click');

		// is message in the messages array?
		assert.include(this.chat.messages, testMessage);
	});

	test('Test - is validator works well', function() {
		var testValidMessage = 'Hai Dudes.';

		assert.isTrue(this.chat.isValid(testValidMessage));
	});
});

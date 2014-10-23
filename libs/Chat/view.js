/**
 * @module views/Chat
 */

var Backbone = require('backbone'),

	/**
	 * @class
	 * @extends external:Backbone.Marionette.View
	 */
		Chat = Backbone.Marionette.View.extend(
		/** @lends module:views/Chat~Chat.prototype */
		{
			/** @var {Array}  Array of messages in the chat window. */
			messages: [],

			/** @var {Object} Object of ui element selectors */
			ui : {
				sendBtn     : '#sendBtn',
				msgInput    : '#msgInput',
				messagesCnt : '#messagesContainer'
			},

			/** @var {Object} Object of event handlers */
			events : {
				'click @ui.sendBtn' : 'onBtnClick'
			},
			
			/**
			 * On Send button click event handler.
			 */
			onBtnClick: function() {
				var message = this.$(this.ui.msgInput).val();

				this.addMessage(message);
			},
			
			/**
			 * Add a message if it is valid, then call render method.
			 * @param {String} text Text of the message.
			 */
			addMessage: function(text) {
				if (this.isValid(text)) {
					this.messages.push(text);
					this.renderMessages();
				}
			},
			
			/**
			 * Checks if the given text is valid or not.
			 * @param {String} text Text of the message.
			 * @returns {Boolean}
			 */
			isValid: function(text) {
				if (text.length > 0 && text.length <= 40) {
					return true;
				}
				else {
					return false;
				}
			},

			/**
			 * Renders the markup of all messages, and appends it into the
			 * msg container.
			 */
			renderMessages: function() {
				var renderedMessages = '',
					messagesCnt      = this.$(this.ui.messagesCnt);
				
				for (var i = 0; i < this.messages.length; i++) {
					renderedMessages += '<li>' + this.messages[i] + '</li>';
				}
				messagesCnt.html('<ul>' + renderedMessages + '</li>');

				messagesCnt[0].scrollTop = messagesCnt[0].scrollHeight;
			}
		}
	);

module.exports = Chat;

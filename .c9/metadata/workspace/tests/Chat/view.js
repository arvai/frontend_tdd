{"changed":true,"filter":false,"title":"view.js","tooltip":"/tests/Chat/view.js","value":"var assert = require('chai').assert,\n\tsinon = require('sinon'),\n\tBackbone = require('backbone'),\n\ttestContent = require('./content/testcontent.html'),\n\n\tChat = require('../../libs/Chat/view');\n\nsuite('Testing Backbone Chat', function() {\n\tsetup(function() {\n\t\tBackbone.$('#sandbox').html(testContent);\n\n\t\tsinon.spy(Chat.prototype, 'onBtnClick');\n\t\tsinon.spy(Chat.prototype, 'addMessage');\n\n\t\tthis.chat = new Chat({\n\t\t\tel : '#sandbox'\n\t\t});\n\t});\n\n\tteardown(function() {\n\t\tChat.prototype.onBtnClick.restore();\n\t\tChat.prototype.addMessage.restore();\n\n\t\tthis.chat.messages = [];\n\t});\n\n\ttest('Test - if sendBtn triggers its event', function() {\n\t\tBackbone.$(this.chat.ui.sendBtn).trigger('click');\n\n\t\tassert.isTrue(this.chat.onBtnClick.calledOnce);\n\t});\n\t\n\ttest('Test - if valid message is stored', function() {\n\t\tvar testMessage = 'Hi dude.';\n\n\t\tBackbone.$(this.chat.ui.msgInput).val(testMessage);\n\t\tBackbone.$(this.chat.ui.sendBtn).trigger('click');\n\n\t\t// is message in the messages array?\n\t\tassert.include(this.chat.messages, testMessage);\n\t});\n\t\n\ttest('Test - is validator works well', function() {\n\t\tvar testValidMessage = 'Hai Dudes.';\n\n\t\tassert.isTrue(this.chat.isValid(testValidMessage));\n\t});\n});\n","undoManager":{"mark":99,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":6},"end":{"row":38,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":7},"end":{"row":38,"column":8}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":8},"end":{"row":38,"column":9}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":9},"end":{"row":38,"column":10}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":10},"end":{"row":38,"column":11}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":11},"end":{"row":38,"column":12}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":12},"end":{"row":38,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":13},"end":{"row":38,"column":14}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":14},"end":{"row":38,"column":15}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":15},"end":{"row":38,"column":16}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":15},"end":{"row":38,"column":16}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":14},"end":{"row":38,"column":15}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":13},"end":{"row":38,"column":14}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":12},"end":{"row":38,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":11},"end":{"row":38,"column":12}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":10},"end":{"row":38,"column":11}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":9},"end":{"row":38,"column":10}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":8},"end":{"row":38,"column":9}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":7},"end":{"row":38,"column":8}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":6},"end":{"row":38,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":5},"end":{"row":38,"column":6}},"text":"B"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":5},"end":{"row":38,"column":6}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":6},"end":{"row":38,"column":7}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":7},"end":{"row":38,"column":8}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":8},"end":{"row":38,"column":9}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":9},"end":{"row":38,"column":10}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":10},"end":{"row":38,"column":11}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":11},"end":{"row":38,"column":12}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":12},"end":{"row":38,"column":13}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":13},"end":{"row":38,"column":14}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":14},"end":{"row":38,"column":15}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":15},"end":{"row":38,"column":16}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":16},"end":{"row":38,"column":17}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":17},"end":{"row":38,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":18},"end":{"row":38,"column":19}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":19},"end":{"row":38,"column":20}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":20},"end":{"row":38,"column":21}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":21},"end":{"row":38,"column":22}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":22},"end":{"row":38,"column":23}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":23},"end":{"row":38,"column":24}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":24},"end":{"row":38,"column":25}},"text":"?"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":25},"end":{"row":38,"column":26}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":26},"end":{"row":38,"column":28}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":27},"end":{"row":38,"column":28}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":28},"end":{"row":38,"column":29}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":29},"end":{"row":38,"column":30}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":30},"end":{"row":38,"column":31}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":31},"end":{"row":38,"column":32}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":32},"end":{"row":38,"column":33}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":33},"end":{"row":38,"column":34}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":34},"end":{"row":38,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":35},"end":{"row":38,"column":36}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":36},"end":{"row":38,"column":37}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":37},"end":{"row":38,"column":38}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":38},"end":{"row":38,"column":39}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":39},"end":{"row":38,"column":40}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":39},"end":{"row":38,"column":40}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":38},"end":{"row":38,"column":39}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":38},"end":{"row":38,"column":39}},"text":"1"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":39},"end":{"row":38,"column":40}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":40},"end":{"row":38,"column":41}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":41},"end":{"row":38,"column":42}},"text":"%"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":42},"end":{"row":38,"column":43}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":43},"end":{"row":38,"column":44}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":44},"end":{"row":38,"column":45}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":45},"end":{"row":38,"column":46}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":46},"end":{"row":38,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":47},"end":{"row":38,"column":48}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":48},"end":{"row":38,"column":49}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":49},"end":{"row":38,"column":50}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":50},"end":{"row":38,"column":51}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":50},"end":{"row":38,"column":51}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":50},"end":{"row":38,"column":51}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":51},"end":{"row":38,"column":52}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":51},"end":{"row":38,"column":52}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":52},"end":{"row":39,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":2}},"text":"\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":2},"end":{"row":39,"column":3}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":3},"end":{"row":39,"column":4}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":4},"end":{"row":39,"column":5}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":5},"end":{"row":39,"column":6}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":6},"end":{"row":39,"column":7}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":7},"end":{"row":39,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":8},"end":{"row":39,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":9},"end":{"row":39,"column":10}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":9},"end":{"row":39,"column":10}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":9},"end":{"row":39,"column":10}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":10},"end":{"row":39,"column":11}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":11},"end":{"row":39,"column":12}},"text":"S"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":12},"end":{"row":39,"column":13}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":13},"end":{"row":39,"column":14}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":14},"end":{"row":39,"column":15}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":15},"end":{"row":39,"column":16}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":16},"end":{"row":39,"column":17}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":17},"end":{"row":39,"column":19}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":19},"end":{"row":39,"column":20}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":18},"end":{"row":39,"column":19}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":19},"end":{"row":39,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":20},"end":{"row":39,"column":21}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":21},"end":{"row":39,"column":22}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":18},"end":{"row":39,"column":22}},"text":"test"},{"action":"insertText","range":{"start":{"row":39,"column":18},"end":{"row":39,"column":29}},"text":"testMessage"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":31}},"text":"\t\tassert.isString(testMessage);"},{"action":"removeLines","range":{"start":{"row":37,"column":0},"end":{"row":39,"column":0}},"nl":"\n","lines":["","\t\t// is message a string? (because of 100% coverage)"]}]}]]},"ace":{"folds":[],"scrolltop":351,"scrollleft":0,"selection":{"start":{"row":44,"column":0},"end":{"row":44,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":24,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1414073284731}
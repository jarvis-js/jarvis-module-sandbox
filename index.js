/*global module,require*/

var sandbox = require('sandbox');

module.exports = function(jarvis, module) {

	var s = new sandbox();

	module.addAction(module.createCommand({
		match: 'eval :code',
		func: function(message, code) {
			s.run(code, function(output) {
				jarvis.reply(message, output.result);
			});
		}
	}));

};

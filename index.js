var sandbox = require('sandbox');

module.exports = function(bot, module) {

	var s = new sandbox();

	module.addCommand('eval :code', function(request, code) {
		s.run(code, function(output) {
			request.reply = output.result;
			bot.reply(request);
		});
	});

};

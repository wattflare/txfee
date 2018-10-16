module.exports = function(app) {
	let bodyParser = require('body-parser');
	app.use(bodyParser.json()); // for parsing application/json
  
  app.post('/webhook/btcpay-ipn', function(req, res) {
    console.log('/webhook/btcpay-ipn called: ')
    console.log(req.body);
    res.send('OK');
  });
}
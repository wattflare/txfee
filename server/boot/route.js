module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/webhook/btcpay-ipn', function(req, res) {
    //res.send('pong');
    console.log('/webhook/btcpay-ipn called: ')
    console.log(req);
    res.send('OK');
  });
}
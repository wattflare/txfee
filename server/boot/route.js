module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.post('/webhook/btcpay-ipn', function(req, res) {
    //res.send('pong');
    console.log('/webhook/btcpay-ipn called: ')
    
    console.log({req.headers});
    console.log({req.query});
    console.log({req.body});

    console
    res.send('OK');
  });
}
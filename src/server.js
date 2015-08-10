'use strict';

const restify = require('restify'),
    sendMail = require('./sendMail.js');

let server = restify.createServer({
    name: 'testSendGrid'
});


server.post('/api/mail', (req, res, next) => {
    sendMail(() => {
        res.send(200, 'ok');
        return next();
    });
});


server.listen(process.env['PORT'] || 3000, () => {
    console.log('Server up and running');
});

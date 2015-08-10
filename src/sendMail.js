const sendgrid = require('sendgrid')(process.env['SENDGRID_USERNAME'], process.env['SENDGRID_PASSWORD']);

module.exports = callback => {
    sendgrid.send({
        to: 'triara.xiii@gmail.com',
        from: 'sendgrin@example.com',
        subject: 'Hello World',
        text: 'My first email through SendGrid.'
    }, (err, json) => {
        if (err) {
            return console.error(err);
        }
        console.log(json);
        callback();
    });
};

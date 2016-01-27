var assert = require('assert');
var mailplate = require('../index');

describe('MailPlate', function(){
    describe('#formatTemplate()', function(){
        it('should replace all instances of data in the dictionary', function() {
            data = {
                mail_title: "THE TITLE",
                mail_body: "THE BODY"
            };

            mailplate.render('/test/testTemplate.html', data)
                .then(function(formattedHTML){
                    var mail_title = formattedHTML.indexOf('{{mail_title}}');
                    var mail_body = formattedHTML.indexOf('{{mail_body}}');
                    assert.equal(mail_title, -1);
                    assert.equal(mail_body, -1);
                })
                .catch(function(error){
                    assert(false);
                })
        })
    })
})

var fs = require('fs');
var premailer = require('premailer-api');



module.exports.renderAsync = renderAsync;
module.exports.render = render;


function renderAsync (templatePath, config, premail){

    if (typeof premail == "undefined") premail = false;

    return new Promise( function(resolve, reject){
        var appRoot = process.cwd();

        fs.readFile(appRoot + templatePath, function (err, data) {
            if (err) reject(err);

            var formattedHTML = data.toString();

            for (var key in config) {
                var re = new RegExp('{{' + key + '}}', 'g');
                formattedHTML = formattedHTML.replace(re, config[key]);
            }

            if (premail) {
                premailer.prepare({
                    html: formattedHTML,
                    preserve_styles:false,
                    remove_classes:true,
                    remove_comments:true
                }, function(err, email) {
                    if (err) reject(err);
                    else resolve(email.html);
                });
            }

            else {
                resolve(formattedHTML);
            }

        });
    });
}


function render (templatePath, config){
    var appRoot = process.cwd();
    var formattedHTML = fs.readFileSync(appRoot + templatePath).toString();

    for (var key in config) {
        formattedHTML = formattedHTML.replace('{{' + key + '}}', config[key]);
    }

    return formattedHTML;
}


var fs = require('fs');
var Styliner = require('styliner');

module.exports.renderAsync = renderAsync;
module.exports.render = render;


function extend(obj, src) {
    var key,
        own = {}.hasOwnProperty;

    for (key in src) {
        if (own.call(src, key)) {
            obj[key] = src[key];
        }
    }
    return obj;
}

function removeComments(htmlSource){
    var re = new RegExp('<!--.+?-->', 'g');
    htmlSource = htmlSource.replace(re,'');
    return htmlSource;
}

function renderAsync (templatePath, templateData, options){

    return new Promise( function(resolve, reject){

        var opt = extend({
            noComm: true, //No Comments
            appRoot: process.cwd(),
            compact: true,
            noCSS: true
        }, options);

        var styliner = new Styliner(opt.appRoot, opt);

        fs.readFile(opt.appRoot + templatePath, 'utf8', function (err, data) {
            if (err) reject(err);

            var formattedHTML = data.toString();

            for (var key in templateData) {
                var re = new RegExp('{{' + key + '}}', 'g');
                formattedHTML = formattedHTML.replace(re, templateData[key]);
            };

            styliner.processHTML(formattedHTML)
                .then(function(resHTML){
                    if (opt.noComm) resHTML = removeComments(resHTML);
                    resolve(resHTML);
                })
                .catch(function(err){
                    reject(err);
                })
        });
    });
}




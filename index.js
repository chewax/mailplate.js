var fs = require('fs');

module.exports.render = function(templatePath, config){

    return new Promise( function(resolve, reject){
        var appRoot = process.cwd();

        fs.readFile(appRoot + templatePath, function (err, data) {
            if (err) reject(err);

            var formattedHTML = data.toString();
            for (var key in config) {
                formattedHTML = formattedHTML.replace('{{' + key + '}}', config[key]);
            }

            resolve(formattedHTML);
        });
    });

}


var fs = require('fs');

module.exports.renderAsync = function(templatePath, config){

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


module.exports.render = function(templatePath, config){
    var appRoot = process.cwd();
    var formattedHTML = fs.readFileSync(appRoot + templatePath).toString();

    for (var key in config) {
        formattedHTML = formattedHTML.replace('{{' + key + '}}', config[key]);
    }

    return formattedHTML;
}


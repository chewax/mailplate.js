var require = ('fs');

module.exports.formatTemplate = function(templatePath, data){

    var formattedHTML = '';
    fs.readFile(templatePath, function (err, data) {
        if (err) throw err;
        formattedHTML = data.toString();
        for (key in data) {
            formattedHTML.replace('{{' + key + '}}', data[key]);
        }
        return formattedHTML;
    });
}


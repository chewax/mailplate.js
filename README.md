Mailplate.js
=========
A small library providing Templating For HTML Mailing.

Mailplate replaces variables in an html document as specified.

## Installation

  npm install mailplate.js --save

## Usage

Variables in the html are written in the angularJS fashion: {{varName}}.

You should not use "-" to divide variables instead use "_".

{{var-name}} incorrect

{{var_name}} correct

Refer the templates path from the root absolute, such as: "/templates/welcomeMail.html".
Upon rendering the template, the function receives an object stating the values for those variables:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{mail_title}}</title>
    <style type="text/css">
        .test {
            color:red;
        }
    </style>
</head>
<body>
    <!--this is a comment -->
    <div class="test">{{mail_body}}</div>
</body>
</html>
```

```javascript
{
    mail_title: "The Title",
    mail_body: "The Body"
}
```

  ```javascript
  var mailplate = require('mailplate.js');

  var pathToTemplate = './template.html';

  var data = {
    mail_title: "The Title",
    mail_body: "The Body"
}

  var renderedTemplate = mailplate.render(pathToTemplate, data);
  console.log(renderedTemplate);

  ```

## Options

Mailplate uses sync rendering and async rendering. The latter has the option to also premail it using [premail api](http://premailer.dialect.ca/)
The premail option switches all styling to inline. This is to avoid some display issues that have engines like mailgun.

### AsycRendering and Premail

```javascript
  var mailplate = require('mailplate.js');

  var pathToTemplate = './template.html';

  var data = {
    var1: newValue1,
    var2: newValue2
  }

  var premail = true;

  mailplate.renderAsync(pathToTemplate, data, premail)
  .then(function(renderedTemplate){
    console.log(renderedTemplate);
  })
  .catch(function(error){
    console.log(error);
  });

  ```

## Tests

  mocha test

## Contributing

You are most welcome to contribute and/or maintain the existing coding style.
Please add unit tests for any new or changed functionality.

## Release History

* 0.1.0 Initial release
* 0.1.2 Actual version

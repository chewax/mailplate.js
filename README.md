

You should not use "-" to divide words instead use "_"

Refer the templates from the root, such as: "/templates/welcomeMail.html"

Mailplate.js
=========
A small library providing Templating For HTML Mailing
Mailplate replaces variables in an html document as specified.

## Installation

  npm install mailplate.js --save

## Usage

Variables in the html are written in the angularJS fashion: {{varName}}
Upon rendering the template, the function recieves an object stating the values for those variables:

{
    varName: "New var value"
}


  ```javascript
  var mailplate = require('mailplate.js');


  var pathToTemplate = './template.html';

  var data = {
    var1: newValue1,
    var2: newValue2
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
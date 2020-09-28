'use strict';

const fs = require('fs');
const path = require('path');
const t = require('babel-types');
const generate = require('babel-generator').default;
const camelToDashed = require('../lib/parsers').camelToDashed;

const dashedProperties = fs
  .readdirSync(path.resolve(__dirname, '../lib/properties'))
  .filter(propertyFile => propertyFile.substr(-3) === '.js')
  .map(propertyFile => camelToDashed(propertyFile.replace('.js', '')));

const out_file = fs.createWriteStream(path.resolve(__dirname, '../lib/implementedProperties.js'), {
  encoding: 'utf-8',
});
var date_today = new Date();
out_file.write(
  "'use strict';\n\n// autogenerated - " +
    (date_today.getMonth() + 1 + '/' + date_today.getDate() + '/' + date_today.getFullYear()) +
    '\n\n'
);
out_file.write('/*\n *\n * https://www.w3.org/Style/CSS/all-properties.en.html\n */\n\n');

const statements = [];
statements.push(
  t.variableDeclaration('var', [
    t.variableDeclarator(
      t.identifier('implementedProperties'),
      t.newExpression(t.identifier('Set'), [])
    ),
  ])
);

dashedProperties.forEach(property => {
  statements.push(
    t.expressionStatement(
      t.callExpression(
        t.memberExpression(t.identifier('implementedProperties'), t.identifier('add')),
        [t.stringLiteral(property)]
      )
    )
  );
});

statements.push(
  t.expressionStatement(
    t.assignmentExpression(
      '=',
      t.memberExpression(t.identifier('module'), t.identifier('exports')),
      t.identifier('implementedProperties')
    )
  )
);

out_file.write(generate(t.program(statements)).code + '\n');
out_file.end(function(err) {
  if (err) {
    throw err;
  }
});

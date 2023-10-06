const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/shapes.js');
const { Square } = require('./lib/shapes.js');
const { Triangle } = require('./lib/shapes.js');
const Svg = require('./lib/svg.js');

function generateSvg() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'textPrompt',
            message: 'Enter three letters.'
        },
        {
            type: 'input',
            name: 'textColorPrompt',
            message: 'What color would you like the letters to be?'
        },
        {
            type: 'input',
            name: 'shapeColorPrompt',
            message: 'What color would you like your shape to be?'
        },
        {
            type: 'list',
            name: 'shapePrompt',
            message: 'What shape would you like?',
            choices: ['Circle', 'Square', 'Triangle']
        },
    ]).then((shapeChoices) => {
        let shapeChoice;
        switch (shapeChoices.shapePrompt) {
            case 'Circle':
                shapeChoice = new Circle();
                break;
            case 'Square':
                shapeChoice = new Square();
                break;
            case 'Triangle':
                shapeChoice = new Triangle();
        }
        shapeChoice.chooseColor(shapeChoices.shapeColorPrompt)
        const createdSvg = new Svg();
        createdSvg.setShapeEl(shapeChoice);
        createdSvg.setText(shapeChoices.textPrompt, shapeChoices.textColorPrompt)
        if (shapeChoices.textPrompt.length > 3) {
            console.error('Must be only three charcters.')
            generateSvg()
        } else {
            writeSvg('my.svg', createdSvg.render())
        }
    })
}
function writeSvg(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => err ? console.log(err) : console.log('Generated my svg'))
}

generateSvg();
const Svg = require('./svg.js');
const { Circle } = require('./shapes.js');

it('Should set a circle inside svg', () => {
    const svg = new Svg()
    const circle = new Circle()
    const expectedSvg = `<svg width="100" height="100"><circle cx="25" cy="75" r="20" fill="green"/><text x="20" y="70" fill="white">abc</text></svg>`
    circle.chooseColor('green')
    svg.setText('abc', 'white')
    svg.setShapeEl(circle)
    expect(svg.render()).toEqual(expectedSvg)
});
const { Circle } = require('./shapes.js');
it('Render a green circle', () => {
    // test()
    const shape = new Circle()
    const expectedShape = `<circle cx="25" cy="75" r="20" fill="green"/>`
    shape.chooseColor('green');
    expect(shape.render()).toEqual(expectedShape);
});
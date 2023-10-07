class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg width="100" height="100">${this.shapeElement}${this.textElement}</svg>`
    }
    setText(text, color) {
        const svgWidth = 100; // Width of SVG
        const textLength = text.length; // Length of text
        const textWidth = textLength * 10; // Calculate the width of the text

        // Calculate the center position for the text
        const centerX = svgWidth / 2;
        const textX = centerX - (textWidth / 2);

        this.textElement = `<text x="49" y="52" font-size="2em" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeEl(shape) {
        this.shapeElement = shape.render()
    }
}

module.exports = Svg
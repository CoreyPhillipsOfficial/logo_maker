class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg width="100" height="100">${this.shapeElement}${this.textElement}</svg>`
    }
    setText(text, color) {
        this.textElement = `<text x="20" y="70" fill="${color}">${text}</text>`
    }
    setShapeEl(shape) {
        this.shapeElement = shape.render()
    }
}

module.exports = Svg
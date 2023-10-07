class Shape {
    constructor() {
        this.color = ''
    }
    chooseColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="20" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="30" y="30" width="40" height="40 fill="${this.color}"/>`;
    }
}
class Triangle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Square, Triangle };
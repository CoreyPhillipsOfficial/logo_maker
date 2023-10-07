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
        return `<circle cx="50" cy="50" r="30" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="30" y="30" width="40" height="40 fill="${this.color}"/>`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="50,0 90,80 10,80" fill="${this.color}"/>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };
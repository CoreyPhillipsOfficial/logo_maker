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
        return `<circle cx="50" cy="46" r="30" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="20" y="17" width="60" height="60" fill="${this.color}"/>`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="50,0 90,80 10,80" fill="${this.color}"/>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };
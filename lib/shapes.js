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
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
}
// class Circle extends Shape {
//     render() {
//         return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
//     }
// }
// class Circle extends Shape {
//     render() {
//         return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
//     }
// }

module.exports = { Circle }
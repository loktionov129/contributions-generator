const colors = [
    '#ebedf0',
    '#9be9a8',
    '#40c463',
    '#30a14e',
    '#216e39',
];

function getIndexByColor(target) {
    return colors.findIndex((color) => color === target);
}

class Color {
    constructor(color) {
        this.color = color;
    }

    static getIndexByColor(color) {
        return colors.findIndex((item) => item === color);
    }

    static random() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    next() {
        const index = getIndexByColor(this.color);

        if (index + 1 === colors.length) {
            return colors[colors.length - 1];
        }

        return colors[index + 1];
    }

    prev() {
        const index = getIndexByColor(this.color);

        if (index === 0) {
            return colors[index];
        }

        return colors[index - 1];
    }
}

[Color.default] = colors;

module.exports = Color;

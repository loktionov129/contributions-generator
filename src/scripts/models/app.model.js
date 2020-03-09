const Color = require('../color');
const ATTRIBUTE_FILL = 'fill';

// state with select(combobox)
const previousContributions = {
    contributions: [],
    date: new Date(),
};

class AppModel {
    getContributions() {
        return Array.from(Array(53))
            .map((_, i) => ({
                translate: 14 * i,
                rects: Array.from(Array(7))
                    .map((_, j) => ({
                        color: '#ebedf0',
                        x: 14 - i,
                        y: 13 * j,
                        height: 10,
                        width: 10,
                    })),
            }));
    }

    increaseContributions(target) {
        const currentColor = new Color(target.getAttribute(ATTRIBUTE_FILL));
        target.setAttribute(ATTRIBUTE_FILL, currentColor.next());
    }

    decreaseContributions(target) {
        setColor(target, (color) => color.prev());
    }
}

function setColor(target, resolveColor) {
    const currentColor = new Color(target.getAttribute(ATTRIBUTE_FILL));
    target.setAttribute(ATTRIBUTE_FILL, resolveColor(currentColor));
}

module.exports = AppModel;

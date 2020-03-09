const Color = require('../color');
const ATTRIBUTE_FILL = 'fill';

const previousContributions = {
    contributions: [],
    date: new Date(),
};

console.warn('check todos in app.view.js', { previousContributions });

function generateState(resolveColor) {
    return Array.from(Array(53))
        .map((_0, i) => ({
            translate: 14 * i,
            rects: Array.from(Array(7))
                .map((_1, j) => ({
                    color: resolveColor(),
                    x: 14 - i,
                    y: 13 * j,
                    height: 10,
                    width: 10,
                })),
        }));
}

function generateRandomState() {
    return generateState(() => Color.random());
}

function setColor(target, resolveColor) {
    const currentColor = new Color(target.getAttribute(ATTRIBUTE_FILL));
    target.setAttribute(ATTRIBUTE_FILL, resolveColor(currentColor));
}

class AppModel {
    constructor(state) {
        this._state = state;
    }

    getContributions() {
        return this._state;
    }

    resetContributions() {
        this._state = AppModel.emptyState;
    }

    setRandomContributions() {
        this._state = generateRandomState();
    }

    static increaseContributions(target) {
        setColor(target, (color) => color.next());
    }

    static decreaseContributions(target) {
        setColor(target, (color) => color.prev());
    }
}

AppModel.emptyState = generateState(() => Color.default);
AppModel.randomState = generateRandomState();

module.exports = AppModel;

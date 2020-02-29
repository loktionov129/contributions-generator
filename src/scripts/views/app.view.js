const Color = require('../color');

function setColor(resolveColor) {
    return function (event) {
        event.preventDefault();

        if (event.target.tagName !== 'rect') {
            return;
        }

        const target = event.target;
        const currentColor = new Color(target.getAttribute('fill'));
        target.setAttribute('fill', resolveColor(currentColor));
    }
}

function getDrawingMode() {
    const drawingModeSelector = 'form[name="settings"] input[name="mode"]';
    const drawingMode = document.querySelector(drawingModeSelector + ':checked');

    if (drawingMode) {
        return drawingMode.value;
    }

    const mode = document.querySelector(drawingModeSelector);
    mode.setAttribute('checked', 'checked');

    return mode.value;
}

class AppView {
    constructor() {
        this._contributions = document.getElementById('contributions__area');
        this.addEventListeners();
    }

    addEventListeners() {
        this._contributions.addEventListener('click', setColor(color => color.next()));
        this._contributions.addEventListener('contextmenu', setColor(color => color.prev()));
    }

    drawContributions(data) {
        console.warn(data);
        const html = data.map(column => {
            const rects = column.rects
                .map((row) => `<rect class="day" width="${row.width}" height="${row.height}" x="${row.x}" y="${row.y}" fill="${row.color}"></rect>`)
                .join('');

            return `<g transform="translate(${column.translate}, 0)">${rects}</g>`;
        })
            .join('');

        this._contributions.innerHTML = html;
    }
}

module.exports = AppView;

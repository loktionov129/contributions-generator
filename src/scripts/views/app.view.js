const Subject = require('../misc/subject');
const ReplaySubject = require('../misc/replay-subject');

const drawingModeSelector = 'form[name="settings"] input[name="mode"]';

// combine mouseUp + mouseDown 
// prevent click + contextMenu

class AppView {
    constructor() {
        this._contributions = document.getElementById('contributions__area');
        this._increaseContributions = increaseContributions.bind(this);
        this._decreaseContributions = decreaseContributions.bind(this);
        this._enableDrawing = enableDrawing.bind(this);
        this._disableDrawing = disableDrawing.bind(this);
        createEvents.call(this);
        addEventListeners.call(this);
        initDrawingMode.call(this);
    }

    activateClickMode() {
        this._contributions.addEventListener('click', this._increaseContributions);
        this._contributions.addEventListener('contextmenu', this._decreaseContributions);

        document.removeEventListener('mousedown', this._enableDrawing);
        document.removeEventListener('mouseup', this._disableDrawing);
    }

    activateMoveMode() {
        document.addEventListener('mousedown', this._enableDrawing);
        document.addEventListener('mouseup', this._disableDrawing);

        this._contributions.removeEventListener('click', this._increaseContributions);
        this._contributions.removeEventListener('contextmenu', this._decreaseContributions);
    }

    drawContributions(data) {
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

function createEvents() {
    this._drawingModeChange$ = new ReplaySubject();
    this.drawingModeChange$ = this._drawingModeChange$.asObservable();

    this._contributionIncrease$ = new Subject();
    this.contributionIncrease$ = this._contributionIncrease$.asObservable();

    this._contributionDecrease$ = new Subject();
    this.contributionDecrease$ = this._contributionDecrease$.asObservable();

    this._generate$ = new Subject();
    this.generate$ = this._generate$.asObservable();
}

function addEventListeners() {
    const _this = this;

    document.getElementById('contributions__generate')
        .addEventListener('click', (event) => {
            event.preventDefault();
            _this._generate$.next(event.target);
        });

    document.querySelectorAll(drawingModeSelector)
        .forEach(radio => {
            radio.addEventListener('change', (event) => _this._drawingModeChange$.next(event.target.value));
        });

    document.addEventListener('selectionchange', (event) => event.preventDefault());
}

function initDrawingMode() {
    const checked = 'checked';
    const drawingMode = document.querySelector(`${drawingModeSelector}:${checked}`);

    if (drawingMode) {
        this._drawingModeChange$.next(drawingMode.value)
        return;
    }

    const mode = document.querySelector(drawingModeSelector);
    this._drawingModeChange$.next(mode.value)
    mode.setAttribute(checked, checked);
}

function increaseContributions(event) {
    event.preventDefault();
    this._contributionIncrease$.next(event.target);
}

function decreaseContributions(event) {
    event.preventDefault();
    this._contributionDecrease$.next(event.target);
}

function enableDrawing(event) {
    preventMissClick(event);
    console.warn('down', event);
    this._contributions.addEventListener('mousemove', fx);
}

function disableDrawing(event) {
    preventMissClick(event);
    console.warn('up', event);
    this._contributions.removeEventListener('mousemove', fx);
}

function fx(event) {
    console.warn({ event, target: event.target });
}

function preventMissClick(event) {
    switch (event.target.tagName.toLowerCase()) {
        case 'input':
        case 'select':
        case 'body':
        case 'html': return;
        default: event.preventDefault();
    }
}

module.exports = AppView;

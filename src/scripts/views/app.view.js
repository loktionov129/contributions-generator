const Subject = require('../misc/subject');
const ReplaySubject = require('../misc/replay-subject');

const drawingModeSelector = 'form[name="settings"] input[name="mode"]';

function createEvents() {
    this._drawingModeChange$ = new ReplaySubject();
    this.drawingModeChange$ = this._drawingModeChange$.asObservable();

    this._contributionIncrease$ = new Subject();
    this.contributionIncrease$ = this._contributionIncrease$.asObservable();

    this._contributionDecrease$ = new Subject();
    this.contributionDecrease$ = this._contributionDecrease$.asObservable();

    this._generate$ = new Subject();
    this.generate$ = this._generate$.asObservable();

    this._clear$ = new Subject();
    this.clear$ = this._clear$.asObservable();

    this._random$ = new Subject();
    this.random$ = this._random$.asObservable();
}

function addEventListeners() {
    document.getElementById('contributions__generate')
        .addEventListener('click', (event) => {
            event.preventDefault();
            this._generate$.next(event.target);
        });

    document.getElementById('contributions__clear')
        .addEventListener('click', (event) => {
            event.preventDefault();
            this._clear$.next();
        });

    document.getElementById('contributions__random')
        .addEventListener('click', (event) => {
            event.preventDefault();
            this._random$.next();
        });

    document.querySelectorAll(drawingModeSelector)
        .forEach((radio) => {
            radio.addEventListener('change', (event) => this._drawingModeChange$.next(event.target.value));
        });

    document.addEventListener('selectionchange', (event) => event.preventDefault());
    this._contributions.addEventListener('click', (event) => event.preventDefault());
    this._contributions.addEventListener('contextmenu', (event) => event.preventDefault());
}

function initDrawingMode() {
    const checked = 'checked';
    const drawingMode = document.querySelector(`${drawingModeSelector}:${checked}`);

    if (drawingMode) {
        this._drawingModeChange$.next(drawingMode.value);
        return;
    }

    const mode = document.querySelector(drawingModeSelector);
    this._drawingModeChange$.next(mode.value);
    mode.setAttribute(checked, checked);
}

function changeContributions(event) {
    event.preventDefault();

    switch (event.buttons) {
        case 1: this._contributionIncrease$.next(event.target); break;
        case 2: this._contributionDecrease$.next(event.target); break;
        default: break;
    }
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

function fx(event) {
    console.warn({ event, target: event.target });
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

//
// constructor(elements)
// this._elements = elements;

//
// state with select(combobox)

//
// save state to local storage
// load prev state

class AppView {
    constructor() {
        this._contributions = document.getElementById('contributions__area');
        this._changeContributions = changeContributions.bind(this);
        this._enableDrawing = enableDrawing.bind(this);
        this._disableDrawing = disableDrawing.bind(this);
        createEvents.call(this);
        addEventListeners.call(this);
        initDrawingMode.call(this);
    }

    activateClickMode() {
        this._contributions.addEventListener('mousedown', this._changeContributions);

        document.removeEventListener('mousedown', this._enableDrawing);
        document.removeEventListener('mouseup', this._disableDrawing);
    }

    activateMoveMode() {
        document.addEventListener('mousedown', this._enableDrawing);
        document.addEventListener('mouseup', this._disableDrawing);

        this._contributions.removeEventListener('mousedown', this._changeContributions);
    }

    drawContributions(data) {
        const html = data.map((column) => {
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

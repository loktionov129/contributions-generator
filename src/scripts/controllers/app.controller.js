const FileLoader = require('../misc/file-loader');

function validateContributionChange(target) {
    return target.tagName.toLowerCase() !== 'rect';
}

function increaseContributions(target) {
    if (validateContributionChange(target)) {
        return;
    }

    this._appModel.increaseContributions(target);
}

function decreaseContributions(target) {
    if (validateContributionChange(target)) {
        return;
    }

    this._appModel.decreaseContributions(target);
}

function renderView() {
    const contributions = this._appModel.getContributions();
    this._appView.drawContributions(contributions);
}

function initHandlers() {
    this._appView.drawingModeChange$
        .subscribe((mode) => {
            switch (mode) {
                case 'click': this._appView.activateClickMode(); break;
                case 'move': this._appView.activateMoveMode(); break;
                default: console.error(`Unexpected mode: ${mode}.`);
            }
        });

    this._appView.contributionIncrease$
        .subscribe(increaseContributions.bind(this));

    this._appView.contributionDecrease$
        .subscribe(decreaseContributions.bind(this));

    this._appView.generate$
        .subscribe(() => {
            const year = +this._appView.year.value || new Date().getFullYear();
            const data = this._appModel.transformContributions(year);
            console.warn(data.join('\r\n'));
            FileLoader.download('dates.txt', data.join('\n'));
        });

    this._appView.clear$
        .subscribe(() => {
            this._appModel.resetContributions();
            renderView.call(this);
        });

    this._appView.random$
        .subscribe(() => {
            this._appModel.setRandomContributions();
            renderView.call(this);
        });
}

class AppController {
    constructor(appModel, appView) {
        this._appModel = appModel;
        this._appView = appView;

        renderView.call(this);
        initHandlers.call(this);
    }
}

module.exports = AppController;

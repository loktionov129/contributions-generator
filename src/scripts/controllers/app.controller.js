class AppController {
    constructor(appModel, appView) {
        this._appModel = appModel;
        this._appView = appView;

        const contributions = appModel.getContributions();
        appView.drawContributions(contributions);
        initHandlers.call(this);
    }
}

function initHandlers() {
    this._appView.drawingModeChange$
        .subscribe(mode => {
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
        .subscribe(console.error);
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

function validateContributionChange(target) {
    return target.tagName.toLowerCase() !== 'rect';
}

module.exports = AppController;

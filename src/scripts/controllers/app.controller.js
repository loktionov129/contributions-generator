class AppController {
    constructor(appModel, appView) {
        this.appModel = appModel;
        this.appView = appView;

        const contributions = appModel.getContributions();
        appView.drawContributions(contributions);
    }
}

module.exports = AppController;

const AppModel = require('./models/app.model');
const AppView = require('./views/app.view');
const AppController = require('./controllers/app.controller');

const appModel = new AppModel(AppModel.randomState);
const appView = new AppView();
(() => new AppController(appModel, appView))();

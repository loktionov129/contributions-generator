const Observable = require('./observable');

class Subject extends Observable {
    next(data = null) {
        this._subscribers
            .forEach(subscriber => subscriber(data));
    }

    asObservable() {
        return {
            subscribe: (data) => this.subscribe(data)
        };
    }
}

module.exports = Subject;
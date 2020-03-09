const Subject = require('./subject');

function notify(subscribers, events) {
    events.forEach((event) => {
        subscribers.forEach((subscriber) => {
            if (!event.calledSubscribers[subscriber]) {
                subscriber(event.value);
                event.calledSubscribers[subscriber] = true;
            }
        });
    });
}

class ReplaySubject extends Subject {
    constructor(bufferSize = 1) {
        super();
        this._bufferSize = bufferSize;
        this._events = [];
    }

    next(data = null) {
        if (this._events.length > this._bufferSize) {
            this._events.shift();
        }

        this._events.push({
            value: data,
            calledSubscribers: {},
        });

        notify(this._subscribers, this._events);
    }

    subscribe(callback) {
        const subscription = super.subscribe(callback);

        notify(this._subscribers, this._events);

        return subscription;
    }
}

module.exports = ReplaySubject;

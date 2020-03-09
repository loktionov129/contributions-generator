const Subscription = require('./subscription');

class Observable {
    constructor() {
        this._subscribers = [];
    }

    subscribe(callback) {
        this._subscribers.push(callback);

        const unsubscribe = () => {
            const subscriberIndex = this._subscribers.findIndex((subscriber) => subscriber === callback);
            this._subscribers.splice(subscriberIndex, 1);
        };

        return new Subscription(unsubscribe);
    }
}

module.exports = Observable;

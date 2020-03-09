class Subscription {
    constructor(callback) {
        this.callback = callback;
    }

    unsubscribe() {
        this.callback();
    }
}

module.exports = Subscription;

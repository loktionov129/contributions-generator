const Color = require('./color');
const AppModel = require('./models/app.model');
const AppView = require('./views/app.view');
const AppController = require('./controllers/app.controller');

const appModel = new AppModel();
const appView = new AppView();
new AppController(appModel, appView);

// Array.from(Array(53))
//     .map(() => Array.from(Array(7)).map(() => 0))


// eslint-disable-next-line max-len
// dataToSave = JSON.parse('[[0,1,2,3,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]');

// function save(dataToSave, year) {
//     const date = new Date(`01-01-${year} 11:00 AM`);
//     const dayOfWeek = date.getDay();
//     const day = date.getDate();
//     const contributions = []

//     for (let col = 0; col < dataToSave.length; ++col) {
//         for (let row = 0; row < dataToSave[col].length; ++row) {
//             const contributionsCount = dataToSave[col][row];

//             if (!contributionsCount) {
//                 continue;
//             }

//             const commitDate = new Date(new Date(date).setDate(7 * col + day - (dayOfWeek - row)));

//             if (commitDate.getYear() > date.getYear()) {
//                 break;
//             }

//             contributions.push({
//                 contributionsCount,
//                 commitDate
//             });
//         }
//     }

//     return contributions;
// }
// save(dataToSave, '2018');


/*
import { Component, OnInit } from "@angular/core";
import { ReplaySubject as OReplaySubject, Subject as OSubject } from "rxjs";

class Subscription {
  constructor(callback) {
      this.callback = callback;
  }

  unsubscribe() {
      this.callback();
  }
}

class Observable {
  constructor() {
    this._subscribers = [];
  }

  subscribe(callback) {
    this._subscribers.push(callback);

    const unsubscribe = () => {
      const subscriberIndex = this._subscribers.findIndex(
        subscriber => subscriber === callback
      );
      this._subscribers.splice(subscriberIndex, 1);
    };

    return new Subscription(unsubscribe);
  }
}

class Subject extends Observable {
  constructor() {
    super();
  }

  next(data = null) {
    this._subscribers.forEach(subscriber => subscriber(data));
  }

  asObservable() {
    return {
      subscribe: data => this.subscribe(data)
    };
  }
}

class ReplaySubject extends Observable {
  constructor() {
      super();
  }

  next(data = null) {
      this._subscribers
          .forEach((subscriber) => subscriber(data));
  }

  asObservable() {
      return {
          subscribe: (data) => this.subscribe(data)
      };
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  ngOnInit() {
    console.group("Subject");
    const subject = new Subject();

    subject.subscribe(console.error);
    subject.next(1);
    subject.subscribe(console.warn);
    subject.next(2);
    console.groupEnd();

    console.group("OSubject");
    const oSubject = new OSubject();

    oSubject.subscribe(console.error);
    oSubject.next(1);
    oSubject.subscribe(console.warn);
    oSubject.next(2);
    console.groupEnd();

    console.group("ReplaySubject");
    const replaySubject = new ReplaySubject();

    replaySubject.subscribe(console.error);
    replaySubject.next(1);
    replaySubject.subscribe(console.warn);
    replaySubject.next(2);
    console.groupEnd();

    console.group("OReplaySubject");
    const oReplaySubject = new OReplaySubject();

    oReplaySubject.subscribe(console.error);
    oReplaySubject.next(1);
    oReplaySubject.subscribe(console.warn);
    oReplaySubject.next(2);
    console.groupEnd();
  }
}

*/

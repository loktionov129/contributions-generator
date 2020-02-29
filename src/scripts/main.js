const Color = require('./color');
const AppModel = require('./models/app.model');
const AppView = require('./views/app.view');
const AppController = require('./controllers/app.controller');

const appModel = new AppModel();
const appView = new AppView();
new AppController(appModel, appView);

function fx(event) {
    console.warn(event);
}

document.addEventListener('mousedown', function (event) {
    event.preventDefault();
    console.warn('down', event);
    // contributions.addEventListener('mousemove', fx);
});
document.addEventListener('mouseup', function (event) {
    event.preventDefault();
    console.warn('up', event);
    // contributions.removeEventListener('mousemove', fx);
});


document.getElementById('contributions__generate')
    .addEventListener('click', function () {
        console.warn(this);
    });



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

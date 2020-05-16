const express = require('express');
const path = require('path');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const http = require('http');
// const bodyParser = require('body-parser');


const app = express();
const buildDir = path.join(__dirname, 'build');

// if (development) {
  // reload = require('reload') 
// } else {
  app.use(express.static(buildDir));
// }


// dotenv.load();
// const development = process.env.NODE_ENV === 'development';
// let reload;

// const store = new MongoDBStore(
//   {
//     uri: `mongodb://cain:${process.env.DBPW}@ds127783.mlab.com:27783/poolmap`,
//     databaseName: 'poolmap',
//     collection: 'mySessions',
//   },
//   (error, suc) => {}
// );
// const db = require('./db');

// app.set('port', process.env.PORT || 3000);
// app.use(
//   session({
//     name: 'server-session-cookie-id',
//     secret: 'my express secret',
//     store,
//     saveUninitialized: true,
//     resave: false,
//   }),
//   fileupload(),
//   bodyParser.json()
// );


// if (process.env.NODE_ENV !== 'development') {
  // app.get('*', cors(), (req, res) => { 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// }

// const server = http.createServer(app);
// if (development) {
//   reload(app)
//     .then(() => {
//       server.listen(app.get('port'), () => {
//         console.log(`Web server listening on port ${app.get('port')}`);
//       });
//     })
//     .catch(err => {
//       console.error(
//         'Reload could not start, could not start server/sample app',
//         err
//       );
//     });
// } else {
//   server.listen(app.get('port'), () => {
//     console.log(`Web server listening on port ${app.get('port')}`);
//   });
// }

module.exports = app;
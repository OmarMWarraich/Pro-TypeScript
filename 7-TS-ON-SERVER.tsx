///////R  U  N  N  I  N  G     T  Y  P  E  S  C  R  I  P  T       O  N     A      S  E  R  V  E  R\\\\\\\\\\\

// If it seems strange to you that Node achieves parallelism by running only one piece of code at a time,
// that's because it is. It's an example of something I call a backwardism.        --Jim R. Wilson.

// npm install express --save 
// npm install -D @types/node --save

// // Simple Node Program

// // A simple Node server

// import * as http from 'http';

// const portNumber = 8080;

// function requestListener(req: http.ServerRequest, res: http.ServerResponse) {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.write('Response Text Here');;
//     res.end();
// }

// http.createServer(requestListener).listen(portNumber);

// console.log('Listening on localhost: ' + portNumber);

// //place this ex code in app.ts, run command node app.js from the source folder. see msg listening on localhost:8080

// //Getting more information from the request

// import * as http from 'http';

// const portNumber = 8080;

// function requestListener(req: http.ServerRequest, res: http.ServerResponse) {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.write('Method: ' + req.method + '\n');
//     res.write('Url: ' + req.url + '\n');
//     res.write('Response Text Here');;
//     res.end();
// }

// http.createServer(requestListener).listen(portNumber);

// console.log('Listening on localhost: ' + portNumber);

// // Simple Express Program

// import * as Express from 'Express';

// const portNumber = 8080;
// const app = express();

// app.get('/', (req, res) => {
//     res.send('You requested ' + req.query.firstname + ' ' + req.query.lastname);
// })

// app.listen(portNumber, 'localhost', () => {
//     console.log('Listening on localhost: ' + portNumber);
// });

// Multiple Routes

// Using Multiple routes 

// import * as express from 'express';

// const portNumber = 8080;
// const app = express();

// app.get('/', (req, res) => {
//     res.send('You requested ' + req.query.firstname + ' ' + req.query.lastname);
// })

// app.get('/One/', (req, res) => {
//     res.send('You got handler One');
// });

// app.get('/Two/', (req, res) => {
//     res.send('You got handler Two');
// });

// app.listen(portNumber, 'localhost', () => {
//     console.log('Listening on localhost:' + portNumber)
// });

// General Error handler.

// import * as express from 'express';

// const portNumber = 8080;
// const app = express();

// app.get('/', (req, res) => {
//     throw new Error('Deliberate Error!');
// })

// app.listen(portNumber, 'localhost', () => {
//     console.log('Listening on localhost:' + portNumber)
// });

// app.use(function(error, req, res, next) {
//     console.error(error.message);
//     res.status(500).send('An error has occurred.');
// });


// General Error in the browser

// RequestHandler (request: Request, response: Response, next: NextFunction) => void;

// ErrorRequestHandler: (error: any, request: Request, response: Response, next: NextFunction) => void

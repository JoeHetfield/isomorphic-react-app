import rid from 'rid';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import responseTime from 'response-time';
import cookieParser from 'cookie-parser';
import ssr from './ssr';

const app = express();

// template engine use pug
app.set('view engine', 'pug');

// template folder
app.set('views', __dirname);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// record response time
app.use(responseTime());

// compress all responses
app.use(compression());

// security patch
app.use(helmet());

// CORS-enabled for all origins
app.use(cors());

// logs on console
app.use(morgan('dev'));

// generate request id
app.use((req, res, next) => {
  res.set('X-RID', rid());
  next();
});

// parsing application/json
app.use(bodyParser.json());

// parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true,
}));

// parsing cookie
app.use(cookieParser());

// session

// csurf

// server side rendering
app.use(ssr);

// routes
// app.get('/', (req, res) => {
//   res.render('index');
// });

// 404
app.use((req, res) => {
  res.status(404).end();
});

// 500
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('-------------------');
  console.error(err);
  console.error('-------------------');

  if (err.code) {
    res.status(err.code).json({
      status: err.code,
      msg: err.message,
    });
  } else {
    res.status(500).end();
  }
});

// start server
app.listen(3000, () => {
  console.log('Express server started on 3000');
});

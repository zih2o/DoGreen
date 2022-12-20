import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import ApplicationError from './errors/application-error';
import routes from './routes';
import logger from './logger';

const app = express();

app.use(cors());

function logResponseTime(req: Request, res: Response, next: NextFunction) {
  // 요청이 들어온 시간
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    // 응답이 끝났을때의 시간을 잰다.
    const elapsedHrTime = process.hrtime(startHrTime);
    // 마이크로초단위 나노초단위
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6; // 1을 10의 6승으로 나눈다.
    const message = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;
    logger.log({
      level: 'debug',
      message,
      consoleLoggerOptions: { label: 'API' }
    });
  });

  next();
}

app.use(logResponseTime);
// response.body 압축해주는 역할
app.use(compression());
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
// { extended: true } : nested object를 지원한다.
// https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).json({
    error: err.message
  });
});

export default app;

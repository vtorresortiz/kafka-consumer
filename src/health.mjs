import Koa from 'koa';
import Router from '@koa/router';
import { stats } from './kafka/consumer.mjs';

export default () => {
  const app = new Koa();
  const route = new Router();
  route.get('/health', async (ctx) => {
    ctx.status = 200;
    ctx.body = {
      consumer: await stats(),
    };
  });

  app.use(route.routes());
  app.listen(3000);
};

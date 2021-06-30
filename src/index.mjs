import Koa from 'koa';
import Router from '@koa/router';
import produce from './kafka/producer.mjs';
import consume, { stats } from './kafka/consumer.mjs';

const run = async () => {
  await produce('Hello KafkaJS user!');
  await consume();
};

run().catch(console.error);

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

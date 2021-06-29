import Koa from 'koa';
import Router from '@koa/router';
import producer from './kafka/producer.mjs';
import consumer from './kafka/consumer.mjs';
import { topicName } from './config.mjs';

const run = async () => {
  // Producing
  const p = await producer();
  await p.send({
    topic: topicName,
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  });

  // Consuming
  const c = await consumer();
  await c.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);

const app = new Koa();
const route = new Router();
route.get('/health', (ctx) => {
  ctx.status = 200;
});
app.use(route.routes());
app.listen(3000);

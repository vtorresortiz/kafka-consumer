import produce from './kafka/producer.mjs';
import consume from './kafka/consumer.mjs';
import healthcheck from './health.mjs';

(async () => {
  await produce('Hello KafkaJS user!');
})().catch(console.error);

(async () => {
  await consume();
})().catch(console.error);

healthcheck();

import kafka from './client.mjs';
import { topicName } from '../config.mjs';

let producer = null;

const init = async () => {
  producer = await kafka.producer();
  await producer.connect();
};

export default async (message) => {
  if (producer === null) await init();
  await producer.send({
    topic: topicName,
    messages: [
      { value: message },
    ],
  });
};

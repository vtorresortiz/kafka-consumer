import kafka from './client.mjs';
import { topicName, groupId } from '../config.mjs';

let consumer = null;

const init = async () => {
  consumer = kafka.consumer({ groupId });
  await consumer.connect();
  await consumer.subscribe({ topic: topicName, fromBeginning: true });
  return consumer;
};

export const stats = async () => {
  const { state } = await consumer.describeGroup();
  return state;
};

export default async () => {
  if (consumer === null) await init();
  await consumer.run({
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

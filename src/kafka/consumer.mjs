/* eslint-disable import/extensions */
import kafka from './client.mjs';
import { topicName, groupId } from '../config.mjs';

export default async () => {
  const consumer = kafka.consumer({ groupId });
  await consumer.connect();
  await consumer.subscribe({ topic: topicName, fromBeginning: true });
  return consumer;
};

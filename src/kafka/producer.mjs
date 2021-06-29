import kafka from './client.mjs';

export default async () => {
  const producer = await kafka.producer();
  await producer.connect();
  return producer;
};

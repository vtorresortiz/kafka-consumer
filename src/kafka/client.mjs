import { Kafka } from 'kafkajs';
import { appId, brokersList } from '../config.mjs';

export default new Kafka({
  clientId: appId,
  brokers: brokersList,
  retry: {
    initialRetryTime: 10000,
    retries: 5,
  },
});

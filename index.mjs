import { Kafka } from 'kafkajs'
import koa from 'koa'
import router from '@koa/router'

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})
 
const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group' })
 
const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
 
  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
 
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}
 
run().catch(console.error)

const app = new koa()
const route = new router()
route.get('/health', (ctx) => {
    ctx.status = 200
})
app.use(route.routes())
app.listen(3000)
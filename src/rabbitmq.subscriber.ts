import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitMQSubscriber {
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'rpc-key',
    queue: 'my-queue',
  })
  public async pubSubHandler(msg: {}) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
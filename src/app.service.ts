import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendMessage(message: string) {
    this.amqpConnection.publish('exchange1', 'rpc-key', { message });
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { PaymentCreatedEvent } from './payment-created.event';
import { PaymentRequestBodyDto } from './dtos/payment-request-body.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async paymentCreate({
    paymentMethod,
    paymentDetails,
  }: PaymentRequestBodyDto) {
    this.billingClient.emit(
      'payment_request',
      new PaymentCreatedEvent('123', paymentMethod, paymentDetails),
    );
  }
}

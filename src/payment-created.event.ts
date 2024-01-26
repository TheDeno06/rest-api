import { PaymentMethod } from './dtos/payment-request-body.dto';

export class PaymentCreatedEvent {
  constructor(
    public readonly paymentId: string,
    public readonly paymentMethod: PaymentMethod,
    public readonly paymentDetails: {},
  ) {}

  toString() {
    return JSON.stringify({
      paymentId: this.paymentId,
      paymentMethod: this.paymentMethod,
      paymentDetails: this.paymentDetails,
    });
  }
}

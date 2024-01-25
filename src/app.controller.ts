import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PaymentRequestBodyDto } from './dtos/payment-request-body.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/api/payment')
  async createPayment(@Body() paymentRequestBody: PaymentRequestBodyDto) {
    const result = await this.appService.paymentCreate(paymentRequestBody);
    return result;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';
import { Logger } from '@nestjs/common';
import { PaymentRequestBodyDto } from 'src/dtos/payment-request-body.dto';

describe('AppService', () => {
  let app: TestingModule;
  let appService: AppService;
  const logger: Logger = new Logger('AppService tests');

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: 'PAYMENT_SERVICE', useValue: { emit: jest.fn() } },
      ],
    }).compile();
    app.useLogger(logger);

    appService = app.get(AppService);
  });

  it('should be defined', async () => {
    expect(app).toBeDefined();
    expect(appService).toBeDefined();
  });

  describe('methods should be defined', () => {
    it('should call paymentCreate', async () => {
      expect(await appService.paymentCreate).toBeTruthy();
    });
  });

  enum PaymentMethod {
    MASTERCARD = 'MASTERCARD',
    VISA = 'VISA',
  }

  // describe('paymentCreate', () => {
  it('should create a payment request', async () => {
    let paymentMethod: PaymentMethod;
    let paymentDetails = {};
    const payment = await appService.paymentCreate({
      paymentMethod,
      // paymentDetails,
    });
  });
  // });
});

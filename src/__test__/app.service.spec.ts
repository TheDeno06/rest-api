import { TestingModule } from '@nestjs/testing';
import { AppService } from 'src/app.service';

describe('AppService', () => {
  let app: TestingModule;
  let appService: AppService;

  it('should be defined', () => {
    expect(app).toBeDefined();
    expect(appService).toBeDefined();
  });

  describe('methods should be defined', () => {
    it('should call paymentCreate', async () => {
      expect(await appService.paymentCreate).toBeTruthy();
    });
  });

  describe('paymentCreate', () => {
    it('should create a payment request', async () => {});
  });
});

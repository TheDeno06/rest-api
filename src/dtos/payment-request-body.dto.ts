import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsIBAN,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';

export enum PaymentMethod {
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}

class CardDetails {
  @IsString()
  @Length(16)
  cardNumber: string;

  @IsString()
  @Length(3)
  cvv: string;

  @IsString()
  @IsDateString()
  expiryDate: string;
}

class Address {
  @IsString()
  line1: string;

  @IsString()
  line2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsString()
  postalCode: string;
}

class PayerDetails {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsObject()
  @ValidateNested()
  @Type(() => Address)
  address: Address;
}

class PayeeDetails {
  @IsString()
  fullName: string;

  @IsIBAN()
  iban: string;
}

class PaymentDetails {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsObject()
  @ValidateNested()
  @Type(() => CardDetails)
  cardDetails: CardDetails;

  @IsObject()
  @ValidateNested()
  @Type(() => PayerDetails)
  payerDetails: PayerDetails;

  @IsObject()
  @ValidateNested()
  @Type(() => PayeeDetails)
  payeeDetails: PayeeDetails;
}

export class PaymentRequestBodyDto {
  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  paymentMethod: PaymentMethod;

  @ValidateNested()
  @Type(() => PaymentDetails)
  paymentDetails: PaymentDetails;
}

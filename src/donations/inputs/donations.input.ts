import { InputType, Field } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

@InputType()
export class DonationsInput {
  @Field()
  readonly name: string;
  @Field()
  readonly address: string;
  @Field()
  readonly city: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly description: string;
  @Field()
  readonly donationPlace: string;
  @Field()
  @IsOptional()
  need: string;
}

@InputType()
export class UpdateDonationsInput extends DonationsInput {
  @Field()
  readonly id: string;
 
}
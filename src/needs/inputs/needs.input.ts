import { InputType, Field } from '@nestjs/graphql'
import { IsIn } from 'class-validator';

@InputType()
export class NeedsInput {
  @Field()
  readonly address: string;
  @Field()
  readonly contact: string;
  @Field()
  readonly city: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly description: string;
  @Field()
  donationPlace: string;
  @Field()
  readonly peopleNeeded:  number;
  @Field()
  readonly childrenNeeded:  number;
  @Field()
  @IsIn(["CC", "PS", "CE"])
  readonly documentType: string;
  @Field()
  readonly documentNumber: string; 
}

@InputType()
export class UpdateNeedsInput extends NeedsInput {
  @Field()
  readonly id: string;
  @Field()
  readonly state: string;
 
}
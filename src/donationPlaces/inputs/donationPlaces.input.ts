import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class DonationPlacesInput {
  @Field()
  readonly name: string;
  @Field()
  readonly address: string;
  @Field()
  readonly city: string;
  @Field()
  readonly picture: string;
  @Field()
  readonly contact: string;
  @Field()
  readonly phone: string;
}

@InputType()
export class UpdateDonationPlacesInput extends DonationPlacesInput {
  @Field()
  readonly id: string;
 
}
import {  Field, ID, ObjectType } from '@nestjs/graphql'
import { DonationPlaceType } from '../../donationPlaces/dto/donationPlace.dto'
import { NeedType } from '../../needs/dto/need.dto'

@ObjectType()
export class DonationType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly address: String;
  @Field()
  readonly city: String;
  @Field()
  readonly phone: String;
  @Field()
  readonly description: String;
  @Field()
  readonly donationPlace: DonationPlaceType;
  @Field({ nullable: true })
  need: NeedType;
  @Field()
  readonly state: String;

 
}

export enum DonationState {
  REGISTERED = "REGISTERED",
  DELIVERED = "DELIVERED",
  IN_HOUSE = "IN_HOUSE",
  FINISHED = "FINISHED",
  CANCELED = "CANCELED"
}
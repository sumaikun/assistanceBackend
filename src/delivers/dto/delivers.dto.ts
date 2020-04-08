import {  Field, ID, ObjectType } from '@nestjs/graphql'
import { DonationType } from "../../donations/dto/donations.dto"
import { NeedType } from "../../needs/dto/need.dto"
import { DonationPlaceType } from "../../donationPlaces/dto/donationPlace.dto"

@ObjectType()
export class DeliverType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly donation: DonationType;
  @Field()
  readonly need: NeedType;
  @Field()
  readonly donationPlace: DonationPlaceType;
  @Field()
  readonly description: String;
  @Field(()=>[String])
  readonly pictures: String[];
  
 
}


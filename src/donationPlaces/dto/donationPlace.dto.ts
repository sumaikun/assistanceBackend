import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class DonationPlaceType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly address: String;
  @Field()
  readonly city: String;
  @Field()
  readonly picture: String;
  @Field()
  readonly contact: String;
  @Field()
  readonly phone: String;
 
}
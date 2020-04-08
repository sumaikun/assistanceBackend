import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
  @Field()
  readonly lastName: string;
  @Field()
  readonly documentType: string;
  @Field()
  readonly documentNumber: string;
  @Field()
  readonly role: string;
  @Field()
  readonly donationPlace: string;
}
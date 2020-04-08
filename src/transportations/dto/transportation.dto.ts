import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class TransportationType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly transporter: string;
  @Field()
  readonly transactionNumber: string;
  @Field()
  readonly donation: string;
 
}
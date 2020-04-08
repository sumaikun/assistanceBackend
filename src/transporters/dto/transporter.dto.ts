import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class TransporterType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly contact: string;
  @Field()
  readonly phone: string;
 
}
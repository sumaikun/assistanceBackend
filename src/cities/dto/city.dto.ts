import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class CityType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
 
}
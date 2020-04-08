import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class LoginType {
  @Field()
  readonly access_token: string;
  @Field()
  readonly role: string;
}
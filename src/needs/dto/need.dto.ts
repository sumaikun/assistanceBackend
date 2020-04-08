import {  Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class NeedType {
    
  @Field(() => ID)
  id: string;
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
  readonly donationPlace: string;
  @Field()
  readonly state: string;
  @Field()
  readonly peopleNeeded: number;
  @Field()
  readonly childrenNeeded: number;
  @Field()
  readonly documentType: string;
  @Field()
  readonly documentNumber: string;
   
}


export enum NeedState {
  REGISTERED = "REGISTERED",
  SELECTED = "SELECTED",
  IN_DELIVER = "IN_DELIVER",
  SOLVED = "SOLVED",
  PARTIAL_SOLVED = "PARTIAL_SOLVED"
}
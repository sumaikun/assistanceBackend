import { InputType, Field } from '@nestjs/graphql'
import { IsOptional } from 'class-validator';


@InputType()
export class TransportersInput {
  @Field()
  readonly name: string;
  @Field()
  readonly contact: string;
  @Field()
  readonly phone: string;
}

@InputType()
export class UpdateTransportersInput extends TransportersInput {
  @Field()
  readonly id: string;
 
}
import { InputType, Field } from '@nestjs/graphql'
import { IsOptional  } from 'class-validator'

@InputType()
export class DeliversInput {
    
  @Field()
  readonly description: string;
  @Field()
  readonly need: string;
  @Field()
  readonly donation: string;
  @Field()
  donationPlace: string;
  @Field(()=>[String])
  readonly pictures: String[];
  
}

@InputType()
export class UpdateDeliversInput extends DeliversInput {
  @Field()
  readonly id: string;
 
}
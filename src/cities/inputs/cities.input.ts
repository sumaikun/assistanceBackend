import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CitiesInput {
  @Field()
  readonly name: string;
}

@InputType()
export class UpdateCitiesInput extends CitiesInput {
  @Field()
  readonly id: string;
 
}
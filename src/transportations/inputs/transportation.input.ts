import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class TransportationsInput {
  
  @Field()
  readonly transporter: string;
  @Field()
  readonly transactionNumber: string;
  @Field()
  readonly donation: string;
  
}

@InputType()
export class UpdateTransportationsInput extends TransportationsInput {
  @Field()
  readonly id: string;
 
}
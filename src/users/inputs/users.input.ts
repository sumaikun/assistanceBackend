import { InputType, Field, ID, ObjectType } from '@nestjs/graphql'
import { IsEmail, IsIn, IsOptional } from 'class-validator';
@InputType()
export class UsersInput {
  @Field()
  readonly name: string;
  @Field()
  readonly lastName: string;
  @Field()
  @IsIn(["CC", "PS", "CE"])
  readonly documentType: string;
  @Field()
  readonly documentNumber: string;  
  @Field()
  @IsEmail() 
  readonly email: string;
  @Field()
  @IsOptional()
  password: string;
  @Field()
  @IsIn(["IS_ADMIN", "IS_ASSISTANCE"])
  readonly role: string;
  @Field()
  @IsOptional()
  readonly donationPlace: string;
}

@InputType()
export class UpdateUsersInput extends UsersInput {
  @Field()
  readonly id: string;
 
}


//@Field(() => Int)
  //readonly age: number;
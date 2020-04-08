import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import * as bcrypt from 'bcryptjs';
import { UsersService } from './users.service';
import { UserType } from './dto/user.dto';
import { UsersInput, UpdateUsersInput } from './inputs/users.input';
import { GqlAuthGuard } from '../auth/guards/custom.guards';
import { UseGuards } from '@nestjs/common';

@Resolver()
@UseGuards(GqlAuthGuard)
export class UsersResolver{

    constructor(private readonly usersService: UsersService){}

    @Query(()=> String)
    async hello(){
        return "hello";
    }

    @Query(() => [UserType])
    
    async users() {
        return this.usersService.findAll();
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') input: UsersInput) {
        
        if(input.password.length > 0)
        {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(input.password, salt);
            input.password = hash;    
        }

        return this.usersService.create(input);
    
    }

    @Mutation(() =>  String)
    async updateUser(@Args('input') input: UpdateUsersInput) {
        
        if(input.password.length > 0)
        {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(input.password, salt);
            input.password = hash;    
        }
        else{
            delete input["password"]
        }

        console.log( await this.usersService.update(input.id, input))

        //return this.usersService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => UserType)
    async user(@Args('input') id:string) {
        return this.usersService.findOne(id);
    }

    @Mutation(() => String)
    async deleteUserByID(@Args('input') id:string) {
        await this.usersService.delete(id);
        return "ok"
    }
}






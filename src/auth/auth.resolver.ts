import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { LoginInput } from './inputs/auth.input';
import { AuthService } from './auth.service';
import { LoginType } from './dto/login.dto';
import { UseGuards } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from './guards/custom.guards';
import { UnauthorizedException
} from "@nestjs/common"; 


@Resolver()
export class AuthResolver{

    constructor(private readonly authService: AuthService){}


    //@UseGuards(AuthGuard('jwt'))
    @Query(()=> String)
    @UseGuards(GqlAuthGuard)
    async hello2(){
        return "i am hello2";
    }

    /*@Query(()=> LoginType)
    async login(@Args('input') input: LoginInput){
        return this.authService.login({ username:"ventas.javc@gmail.com" , id:2 });
    }*/

    @Mutation(() => LoginType)
    async login(@Args('input') input: LoginInput) {       

        const user = await this.authService.validateUser(input.email,input.password)
        
        if(!user){
            throw new UnauthorizedException();
        }
        else{
            return this.authService.login(user);
        }         
    
    }


}
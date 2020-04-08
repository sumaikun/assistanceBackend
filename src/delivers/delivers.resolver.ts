import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { DeliversService } from './delivers.service';
import { DeliverType } from './dto/delivers.dto';
import { DeliversInput, UpdateDeliversInput } from './inputs/delivers.input'
import { UseGuards , BadRequestException } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/custom.guards';
import { NeedsService } from '../needs/needs.service';
import { NeedState } from '../needs/dto/need.dto';
import { DonationState } from '../donations/dto/donations.dto'
import { DonationsService } from '../donations/donations.service';
import { AccessToken } from '../auth/decorators/custom.decorators';
import { AuthService } from '../auth/auth.service';

@Resolver()

export class DeliversResolver{

    constructor(
        private readonly donationsService: DonationsService,
        private readonly deliversService: DeliversService,
        private readonly needsService: NeedsService,
        private readonly authService: AuthService
        ){}


    @Query(() => [DeliverType])
    //@UseGuards(GqlAuthGuard)
    async delivers(@AccessToken(this.authService) token: string) {

        const decode = this.authService.DecodeToken(token)      

        const user = await this.authService.findUserByUsername(decode["username"])

        if(user.role === "IS_ADMIN")
        {            
            return this.deliversService.findAll();
        }else{
            return this.deliversService.findBydonationPlace(user.donationPlace)
        }
        
    }

    @Mutation(() => DeliverType)
    @UseGuards(GqlAuthGuard)
    async createDeliver(@Args('input') input: DeliversInput, @AccessToken(this.authService) token: string) {
        
        const decode = this.authService.DecodeToken(token)      

        const user = await this.authService.findUserByUsername(decode["username"])

        if(user.role === "IS_ADMIN")
        {
            console.log("is admin")

            if(input.donationPlace === "")
            {
                new BadRequestException();
            }

        }else{
            console.log("is assistance")
            input.donationPlace = user.donationPlace
        }

        let toUpdate = await this.donationsService.findOne(input.donation)

        toUpdate.state = DonationState.FINISHED

        await this.donationsService.update(input.donation,toUpdate)

        return this.deliversService.create(input);
    
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async updateDeliver(@Args('input') input: UpdateDeliversInput, @AccessToken(this.authService) token: string) {    

        const decode = this.authService.DecodeToken(token)      

        const user = await this.authService.findUserByUsername(decode["username"])

        if(user.role === "IS_ADMIN")
        {
            console.log("is admin")

            if(input.donationPlace === "")
            {
                new BadRequestException();
            }

        }else{
            console.log("is assistance")
            input.donationPlace = user.donationPlace
        }        

        await this.deliversService.update(input.id, input)   

        return "ok"
    
    }

    @Query(() => DeliverType)
    @UseGuards(GqlAuthGuard)
    async deliver(@Args('input') id:string) {
        return this.deliversService.findOne(id);
    }

    @Mutation(() => DeliverType)
    @UseGuards(GqlAuthGuard)
    async deleteDeliverByID(@Args('input') id:string) {
        return this.deliversService.delete(id);
    }
}






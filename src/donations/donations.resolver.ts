import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { DonationsService } from './donations.service';
import { DonationType, DonationState } from './dto/donations.dto';
import { DonationsInput, UpdateDonationsInput } from './inputs/donations.input'
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/custom.guards';
import { NeedsService } from '../needs/needs.service';
import { NeedState } from '../needs/dto/need.dto';
import { AccessToken } from '../auth/decorators/custom.decorators'
import { AuthService } from '../auth/auth.service';

@Resolver()

export class DonationResolver{

    constructor(
        private readonly donationsService: DonationsService,
        private readonly needsService: NeedsService,
        private readonly authService: AuthService
        ){}


    @Query(() => [DonationType])
    @UseGuards(GqlAuthGuard)
    async donations(@AccessToken(this.authService) token: string) {

        const decode = this.authService.DecodeToken(token)      

        const user = await this.authService.findUserByUsername(decode["username"])

        if(user.role === "IS_ADMIN")
        {            
            return this.donationsService.findAll();
        }else{
            return this.donationsService.findBydonationPlace(user.donationPlace)
        } 
        
    }

    @Mutation(() => DonationType)
    //@UseGuards(GqlAuthGuard)
    async createDonation(@Args('input') input: DonationsInput) {
        
        if(input.need.length == 0)
        {
            delete input.need
        }else{

            let toUpdate = await this.needsService.findOne(input.need)

            toUpdate.state = NeedState.SELECTED

            await this.needsService.update(input.need,toUpdate)
        }
       
        const copyInput = { ...input, state: DonationState.REGISTERED  }

        return this.donationsService.create(copyInput);
    
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async updateDonation(@Args('input') input: UpdateDonationsInput) {    

        //console.log("input",input)

        if(input.need.length == 0)
        {
            delete input.need
        }else{
            let toUpdate = await this.needsService.findOne(input.need)

            toUpdate.state = NeedState.SELECTED

            await this.needsService.update(input.need,toUpdate)
        }

        await this.donationsService.update(input.id, input)

        //return this.donationsService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => DonationType)
    @UseGuards(GqlAuthGuard)
    async donation(@Args('input') id:string) {
        return this.donationsService.findOne(id);
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async deleteDonationByID(@Args('input') id:string) {
        await this.donationsService.delete(id);
        return "ok"
    }

    @Mutation(() => DonationType)
    @UseGuards(GqlAuthGuard)
    async getDonationByNeed(@Args('input') id:string) {
        return this.donationsService.findOneByNeed(id);
    }
}






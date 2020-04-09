import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { DonationPlacesService } from './donationPlaces.service';
import { DonationPlaceType } from './dto/donationPlace.dto';
import { DonationPlacesInput, UpdateDonationPlacesInput } from './inputs/donationPlaces.input'
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/custom.guards';

@Resolver()

export class DonationPlacesResolver{

    constructor(private readonly donationPlacesService: DonationPlacesService){}


    @Query(() => [DonationPlaceType])
    //@UseGuards(GqlAuthGuard)
    async donationPlaces() {
        return this.donationPlacesService.findAll();
    }

    @Mutation(() => DonationPlaceType)
    @UseGuards(GqlAuthGuard)
    async createDonationPlace(@Args('input') input: DonationPlacesInput) {
        
       
        return this.donationPlacesService.create(input);
    
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async updateDonationPlace(@Args('input') input: UpdateDonationPlacesInput) {    

        //console.log("input",input)

        await this.donationPlacesService.update(input.id, input)

        //return this.donationPlacesService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => DonationPlaceType)
    @UseGuards(GqlAuthGuard)
    async donationPlace(@Args('input') id:string) {
        return this.donationPlacesService.findOne(id);
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async deleteDonationPlaceByID(@Args('input') id:string) {
        await this.donationPlacesService.delete(id);
        return "ok"
    }
}






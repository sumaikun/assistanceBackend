import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { TransportationsService } from './transportation.service';
import { DonationsService } from '../donations/donations.service';
import { NeedsService } from '../needs/needs.service';
import { TransportationType } from './dto/transportation.dto'
import { TransportationsInput, UpdateTransportationsInput } from './inputs/transportation.input'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/custom.guards'
import { DonationState } from '../donations/dto/donations.dto';
import { NeedState } from '../needs/dto/need.dto';

@Resolver()
@UseGuards(GqlAuthGuard)
export class TransporterResolver{

    constructor(
        private readonly transporterService: TransportationsService,
        private readonly donationsService: DonationsService,
        private readonly needsService: NeedsService
    ){}


    @Query(() => [TransportationType])
    
    async transportations() {
        return this.transporterService.findAll();
    }

    @Mutation(() => TransportationType)
    async createTransportation(@Args('input') input: TransportationsInput) {        
        
        console.log("here create transport")

        let toUpdate = await this.donationsService.findOne(input.donation)

        toUpdate.state = DonationState.DELIVERED

        await this.donationsService.update(input.donation,toUpdate)

        let toUpdate2 = await this.needsService.findOne(toUpdate.need)

        toUpdate2.state = NeedState.IN_DELIVER

        await this.needsService.update(toUpdate.need,toUpdate2)
        
        return this.transporterService.create(input);
        
    
    }

    @Mutation(() => String)
    async updateTransportation(@Args('input') input: UpdateTransportationsInput) {    

        console.log("input",input)

        console.log(await this.transporterService.update(input.id, input))

        //return this.transporterService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => TransportationType)    
    async transportation(@Args('input') id:string) {
        return this.transporterService.findOne(id);
    }

    @Mutation(() => String)    
    async deleteTransportationByID(@Args('input') id:string) {
        return this.transporterService.delete(id);
    }

    @Mutation(() => TransportationType)    
    async getTransportationByDonation(@Args('input') id:string) {
        return this.transporterService.findOneByDonation(id);
    }
}






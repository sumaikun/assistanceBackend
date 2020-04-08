import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { TransporterService } from './transporters.service';
import { TransporterType } from './dto/transporter.dto';
import { TransportersInput, UpdateTransportersInput } from './inputs/transporters.input'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/custom.guards'

@Resolver()
@UseGuards(GqlAuthGuard)
export class TransporterResolver{

    constructor(private readonly transporterService: TransporterService){}


    @Query(() => [TransporterType])
    
    async transporters() {
        return this.transporterService.findAll();
    }

    @Mutation(() => TransporterType)
    async createTransporter(@Args('input') input: TransportersInput) {        
       
        return this.transporterService.create(input);
    
    }

    @Mutation(() => String)
    async updateTransporter(@Args('input') input: UpdateTransportersInput) {    

        console.log("input",input)

        console.log(await this.transporterService.update(input.id, input))

        //return this.transporterService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => TransporterType)    
    async transporter(@Args('input') id:string) {
        return this.transporterService.findOne(id);
    }

    @Mutation(() => TransporterType)    
    async deleteTransporterByID(@Args('input') id:string) {
        return this.transporterService.delete(id);
    }
}






import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { NeedsService } from './needs.service';
import { NeedType, NeedState } from './dto/need.dto';
import { NeedsInput, UpdateNeedsInput } from './inputs/needs.input'
import { UseGuards , BadRequestException} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { GqlAuthGuard } from '../auth/guards/custom.guards';
import { AccessToken } from '../auth/decorators/custom.decorators';


@Resolver()

export class NeedsResolver{

    constructor(private readonly needsService: NeedsService,
        private readonly authService: AuthService
        ){}


    @Query(() => [NeedType])
    //@UseGuards(GqlAuthGuard)
    async needs(@AccessToken(this.authService) token: string) {     
       
        const decode = this.authService.DecodeToken(token)
        
        if(decode)
        {
            const user = await this.authService.findUserByUsername(decode["username"])

            if(user.role === "IS_ADMIN")
            {            
                return this.needsService.findAll();
            }else{
                return this.needsService.findBydonationPlace(user.donationPlace)
            }
        }
        else{
            return this.needsService.findAll();
        }
         
        
    }

    @Query(() => [NeedType])
    //@UseGuards(GqlAuthGuard)
    async needsByDonation(@Args('input') donationPlace: string) {     
       
        console.log("needs",donationPlace, await this.needsService.findBydonationPlace(donationPlace))

        return this.needsService.findBydonationPlace(donationPlace)         
        
    }

    @Mutation(() => NeedType)
    @UseGuards(GqlAuthGuard)
    async createNeed(@Args('input') input: NeedsInput, @AccessToken(this.authService) token: string) {
        
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

        const inputCopy = { ...input , state: NeedState.REGISTERED}

        console.log(inputCopy)
        
        return this.needsService.create(inputCopy);
    
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async updateNeed(@Args('input') input: UpdateNeedsInput) {    

        console.log("input",input)

        console.log(await this.needsService.update(input.id, input))

        //return this.needsService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => NeedType)
    @UseGuards(GqlAuthGuard)
    async need(@Args('input') id:string) {
        return this.needsService.findOne(id);
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async deleteNeedByID(@Args('input') id:string) {
        await this.needsService.delete(id);
        return "ok"
    }

    @Mutation(() => NeedType)
    @UseGuards(GqlAuthGuard)
    async getByDocumentNumber(@Args('input') documentNumber:string) {
        console.log( await this.needsService.findOneByDocumentNumber(documentNumber) )
        return this.needsService.findOneByDocumentNumber(documentNumber);
    }
}






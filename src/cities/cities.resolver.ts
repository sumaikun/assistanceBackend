import { Resolver, Query, Mutation, Args  } from '@nestjs/graphql'
import { CitiesService } from './cities.service';
import { CityType } from './dto/city.dto';
import { CitiesInput, UpdateCitiesInput } from './inputs/cities.input'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/custom.guards'

@Resolver()
export class CitiesResolver{

    constructor(private readonly citiesService: CitiesService){}


    @Query(() => [CityType])
    
    async cities() {
        return this.citiesService.findAll();
    }

    @Mutation(() => CityType)
    @UseGuards(GqlAuthGuard)
    async createCity(@Args('input') input: CitiesInput) {        
       
        return this.citiesService.create(input);
    
    }

    @Mutation(() => String)
    @UseGuards(GqlAuthGuard)
    async updateCity(@Args('input') input: UpdateCitiesInput) {    

        console.log("input",input)

        console.log(await this.citiesService.update(input.id, input))

        //return this.citiesService.update(input.id, input);

        return "ok"
    
    }

    @Query(() => CityType)
    @UseGuards(GqlAuthGuard)    
    async city(@Args('input') id:string) {
        return this.citiesService.findOne(id);
    }

    @Mutation(() => CityType)
    @UseGuards(GqlAuthGuard)    
    async deleteCityByID(@Args('input') id:string) {
        return this.citiesService.delete(id);
    }
}






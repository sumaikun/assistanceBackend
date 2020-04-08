import { Module } from "@nestjs/common"
import { CitiesResolver } from "./cities.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesSchema } from './cities.schema';
import { CitiesService } from './cities.service';
import { AuthModule } from '../auth';

@Module({
    imports:[ AuthModule, MongooseModule.forFeature([{ name:'City', schema:CitiesSchema }])],
    providers:[CitiesResolver,CitiesService],
    exports: [CitiesService]
})
export class CitiesModule{} 
import { Module } from "@nestjs/common"
import { DonationPlacesResolver } from "./donationPlaces.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { DonationPlacesSchema } from './donationPlaces.schema';
import { DonationPlacesService } from './donationPlaces.service';
import { AuthModule } from '../auth';

@Module({
    imports:[ AuthModule,MongooseModule.forFeature([{ name:'DonationPlaces', schema:DonationPlacesSchema }])],
    providers:[DonationPlacesResolver,DonationPlacesService],
    exports: [DonationPlacesService]
})
export class DonationPlacesModule{} 
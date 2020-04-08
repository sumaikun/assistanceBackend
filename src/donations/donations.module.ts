import { Module } from "@nestjs/common"
import { DonationResolver } from "./donations.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { DonationPlacesSchema } from './donations.schema';
import { DonationsService } from './donations.service';
import { AuthModule } from '../auth';
import { NeedsModule } from '../needs';

@Module({
    imports:[ AuthModule, NeedsModule, MongooseModule.forFeature([{ name:'Donations', schema:DonationPlacesSchema }])],
    providers:[DonationResolver,DonationsService],
    exports: [DonationsService]
})
export class DonationModule{} 
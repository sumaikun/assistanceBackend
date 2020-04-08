import { Module } from "@nestjs/common"
import { TransporterResolver } from "./transportations.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { TransportationsSchema } from './transportation.schema';
import { TransportationsService } from './transportation.service';
import { AuthModule } from '../auth';
import { DonationModule } from '../donations'
import { NeedsModule } from '../needs'

@Module({
    imports:[ AuthModule, DonationModule, NeedsModule,
         MongooseModule.forFeature([{ name:'Transportations', schema:TransportationsSchema }])],
    providers:[TransporterResolver,TransportationsService],
    exports: [TransportationsService]
})
export class TransportationsModule{} 
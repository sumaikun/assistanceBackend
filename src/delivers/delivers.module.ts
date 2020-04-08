import { Module } from "@nestjs/common"
import { DeliversResolver } from "./delivers.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { DeliversSchema } from './delivers.schema';
import { DeliversService } from './delivers.service';
import { AuthModule } from '../auth';
import { NeedsModule } from '../needs';
import { DonationModule } from '../donations';

@Module({
    imports:[ AuthModule, NeedsModule, DonationModule,
        MongooseModule.forFeature([{ name:'Delivers', schema:DeliversSchema }])],
    providers:[DeliversResolver,DeliversService],
    exports: [DeliversService]
})
export class DeliversModule{} 
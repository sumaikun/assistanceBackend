import { Module } from "@nestjs/common"
import { TransporterResolver } from "./transporters.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { TransportersSchema } from './transporters.schema';
import { TransporterService } from './transporters.service';
import { AuthModule } from '../auth';

@Module({
    imports:[ AuthModule, MongooseModule.forFeature([{ name:'Transporter', schema:TransportersSchema }])],
    providers:[TransporterResolver,TransporterService],
    exports: [TransporterService]
})
export class TransporterModule{} 
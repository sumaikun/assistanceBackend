import { Module } from "@nestjs/common"
import { NeedsResolver } from "./needs.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { NeedsSchema } from './needs.schema';
import { NeedsService } from './needs.service';
import { AuthModule } from '../auth';

@Module({
    imports:[ AuthModule,MongooseModule.forFeature([{ name:'Need', schema:NeedsSchema }])],
    providers:[NeedsResolver,NeedsService],
    exports: [NeedsService]
})
export class NeedsModule{} 
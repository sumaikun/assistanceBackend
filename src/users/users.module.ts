import { Module } from "@nestjs/common"
import { UsersResolver } from "./users.resolver"
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './users.schema';
import { UsersService } from './users.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[ AuthModule,
        MongooseModule.forFeature([{ name:'User', schema:UsersSchema }])],
    providers:[UsersResolver,UsersService],
    exports: [UsersService]
})
export class UsersModule{} 


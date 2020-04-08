import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { CitiesModule } from './cities';
import { DonationPlacesModule } from './donationPlaces';
import { NeedsModule } from './needs';
import { TransporterModule } from './transporters';
import { DonationModule } from './donations';
import { TransportationsModule } from './transportations';
import { DeliversModule } from './delivers';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    UsersModule,
    AuthModule,
    CitiesModule,
    DonationPlacesModule,
    NeedsModule,
    TransporterModule,
    DonationModule,
    TransportationsModule,
    DeliversModule,
    GraphQLModule.forRoot({
      autoSchemaFile:'scheme.gql',
      context: ({ req }) => {
        //console.log('req', req.headers);
        return ({ req });
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/hmanagement'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

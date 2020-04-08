import { Module, forwardRef } from '@nestjs/common';

import { UsersModule } from './../users/users.module';

import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '4h' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
  exports: [PassportModule, LocalStrategy, AuthService]
})
export class AuthModule {}
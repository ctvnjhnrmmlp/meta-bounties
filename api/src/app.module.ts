import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BountiesModule } from './bounties/bounties.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BountiesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

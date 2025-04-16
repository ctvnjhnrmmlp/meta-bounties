import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';

@Module({
  controllers: [BountiesController],
  providers: [BountiesService, PrismaService],
})
export class BountiesModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { BountiesService } from './bounties.service';

@Controller('bounties')
export class BountiesController {
  constructor(private readonly bountiesService: BountiesService) {}

  @Post()
  create(@Body() createBountyInput: Prisma.BountyCreateInput) {
    return this.bountiesService.create(createBountyInput);
  }

  @Get()
  findAll() {
    return this.bountiesService.bounties({
      skip: 0,
      take: 100,
      cursor: undefined,
      where: {},
      orderBy: {
        id: 'asc',
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bountiesService.bounty({
      id,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.BountyUpdateInput) {
    return this.bountiesService.updateBounty({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bountiesService.deleteBounty({
      id,
    });
  }
}

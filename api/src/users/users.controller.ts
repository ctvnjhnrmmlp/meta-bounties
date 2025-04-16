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
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.users({
      skip: 0,
      take: 1,
      cursor: undefined,
      where: {},
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.user({
      id,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
    return this.usersService.updateUser({
      where: {
        id,
      },
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser({
      id,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Bounty, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BountiesService {
  constructor(private prisma: PrismaService) {}

  async bounty(
    bountyWhereUniqueInput: Prisma.BountyWhereUniqueInput,
  ): Promise<Bounty | null> {
    return this.prisma.bounty.findUnique({
      where: bountyWhereUniqueInput,
    });
  }

  async bounties(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BountyWhereUniqueInput;
    where?: Prisma.BountyWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Bounty[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.bounty.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  create(data: Prisma.BountyCreateInput) {
    return this.prisma.bounty.create({
      data,
    });
  }

  async updateBounty(params: {
    where: Prisma.BountyWhereUniqueInput;
    data: Prisma.BountyUpdateInput;
  }): Promise<Bounty> {
    const { where, data } = params;
    return this.prisma.bounty.update({
      data,
      where,
    });
  }

  async deleteBounty(where: Prisma.BountyWhereUniqueInput): Promise<Bounty> {
    return this.prisma.bounty.delete({
      where,
    });
  }
}

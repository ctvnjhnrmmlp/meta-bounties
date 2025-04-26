import { auth } from '@workspace/auth';
import BountyCard from '@workspace/ui/components/blocks/button/bounty-card';
import { CategoryFilter } from '@workspace/ui/components/blocks/filter/category-filter';
import { ChainFilter } from '@workspace/ui/components/blocks/filter/chain-filter';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@workspace/ui/components/tabs';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();

  if (!session) {
    return redirect('/signin');
  }

  return (
    <main className='container py-6 mx-auto'>
      <div className='flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Explore Bounties
          </h1>
          <p className='text-muted-foreground'>
            Discover opportunities across multiple blockchain ecosystems
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <ChainFilter />
          <CategoryFilter />
        </div>
      </div>
      <Tabs defaultValue='all' className='mt-6'>
        <TabsList>
          <TabsTrigger value='all'>All Bounties</TabsTrigger>
          <TabsTrigger value='featured'>Featured</TabsTrigger>
          <TabsTrigger value='new'>New</TabsTrigger>
          <TabsTrigger value='ending-soon'>Ending Soon</TabsTrigger>
        </TabsList>
        <TabsContent value='all' className='mt-6'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <BountyCard
              title='Build a Cross-Chain NFT Marketplace'
              description='Create a marketplace that allows users to buy and sell NFTs across Aptos and Ethereum.'
              reward='5,000 APT'
              chain='aptos'
              category='Development'
              deadline='5 days left'
            />
            <BountyCard
              title='Design a Multi-Chain Wallet UI'
              description='Design a user-friendly wallet interface that supports multiple blockchain networks.'
              reward='2,500 USDC'
              chain='ethereum'
              category='Design'
              deadline='3 days left'
            />
            <BountyCard
              title='Create Educational Content for Aptos Move'
              description='Develop comprehensive tutorials explaining Move programming on Aptos.'
              reward='1,000 APT'
              chain='aptos'
              category='Content'
              deadline='7 days left'
            />
            <BountyCard
              title='Develop a Cross-Chain Bridge UI'
              description='Build a user interface for a bridge that connects Aptos, Ethereum, and Solana.'
              reward='3,000 USDC'
              chain='solana'
              category='Development'
              deadline='10 days left'
            />
            <BountyCard
              title='Create a Chain-Agnostic Token Swap Interface'
              description='Design and implement a UI for swapping tokens across multiple chains.'
              reward='4,000 USDC'
              chain='ethereum'
              category='Development'
              deadline='6 days left'
            />
            <BountyCard
              title='Write Technical Documentation for SDK'
              description='Create comprehensive documentation for our multi-chain SDK.'
              reward='1,500 APT'
              chain='aptos'
              category='Documentation'
              deadline='4 days left'
            />
          </div>
        </TabsContent>
        <TabsContent value='featured'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <BountyCard
              title='Build a Cross-Chain NFT Marketplace'
              description='Create a marketplace that allows users to buy and sell NFTs across Aptos and Ethereum.'
              reward='5,000 APT'
              chain='aptos'
              category='Development'
              deadline='5 days left'
              featured={true}
            />
            <BountyCard
              title='Develop a Cross-Chain Bridge UI'
              description='Build a user interface for a bridge that connects Aptos, Ethereum, and Solana.'
              reward='3,000 USDC'
              chain='solana'
              category='Development'
              deadline='10 days left'
              featured={true}
            />
          </div>
        </TabsContent>
        <TabsContent value='new'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <BountyCard
              title='Create a Chain-Agnostic Token Swap Interface'
              description='Design and implement a UI for swapping tokens across multiple chains.'
              reward='4,000 USDC'
              chain='ethereum'
              category='Development'
              deadline='6 days left'
              isNew={true}
            />
            <BountyCard
              title='Write Technical Documentation for SDK'
              description='Create comprehensive documentation for our multi-chain SDK.'
              reward='1,500 APT'
              chain='aptos'
              category='Documentation'
              deadline='4 days left'
              isNew={true}
            />
          </div>
        </TabsContent>
        <TabsContent value='ending-soon'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <BountyCard
              title='Design a Multi-Chain Wallet UI'
              description='Design a user-friendly wallet interface that supports multiple blockchain networks.'
              reward='2,500 USDC'
              chain='ethereum'
              category='Design'
              deadline='3 days left'
            />
            <BountyCard
              title='Write Technical Documentation for SDK'
              description='Create comprehensive documentation for our multi-chain SDK.'
              reward='1,500 APT'
              chain='aptos'
              category='Documentation'
              deadline='4 days left'
            />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

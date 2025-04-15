import { auth } from '@/auth';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Check, ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Bounties() {
  const session = await auth();

  if (!session) {
    return redirect('/signin');
  }

  return (
    <main className='container py-6'>
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>My Bounties</h1>
          <p className='text-muted-foreground'>
            Manage your bounties and submissions
          </p>
        </div>
        <Button asChild>
          <Link href='/create-bounty'>Create New Bounty</Link>
        </Button>
      </div>
      <Tabs defaultValue='applied' className='mt-6'>
        <TabsList>
          <TabsTrigger value='applied'>Applied</TabsTrigger>
          <TabsTrigger value='created'>Created</TabsTrigger>
          <TabsTrigger value='completed'>Completed</TabsTrigger>
        </TabsList>
        <TabsContent value='applied' className='mt-6 space-y-4'>
          <Card>
            <CardHeader className='pb-2'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-base'>
                  Build a Cross-Chain NFT Marketplace
                </CardTitle>
                <Badge variant='outline'>In Progress</Badge>
              </div>
              <CardDescription>
                Aptos Foundation • Due April 20, 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-4'>
                Create a marketplace that allows users to buy and sell NFTs
                across Aptos and Ethereum. The marketplace should support
                viewing, listing, and purchasing NFTs from both chains in a
                unified interface.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Award className='mr-1 h-4 w-4 text-purple-500' />
                  <span className='text-sm font-medium'>5,000 APT</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='outline' size='sm'>
                    <FileText className='mr-2 h-4 w-4' />
                    View Details
                  </Button>
                  <Button size='sm'>
                    <Check className='mr-2 h-4 w-4' />
                    Submit Work
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-base'>
                  Create a Chain-Agnostic Token Swap Interface
                </CardTitle>
                <Badge variant='outline'>Applied</Badge>
              </div>
              <CardDescription>Chain Labs • Due April 25, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-4'>
                Design and implement a UI for swapping tokens across multiple
                chains. The interface should be intuitive and support Aptos,
                Ethereum, and Solana tokens.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Award className='mr-1 h-4 w-4 text-purple-500' />
                  <span className='text-sm font-medium'>4,000 USDC</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='outline' size='sm'>
                    <FileText className='mr-2 h-4 w-4' />
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='created' className='mt-6 space-y-4'>
          <Card>
            <CardHeader className='pb-2'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-base'>
                  Design a Multi-Chain Analytics Dashboard
                </CardTitle>
                <Badge variant='secondary'>Open</Badge>
              </div>
              <CardDescription>
                Due May 15, 2025 • 3 submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-4'>
                Looking for a designer to create a dashboard UI for tracking
                assets and activities across multiple blockchain networks.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Award className='mr-1 h-4 w-4 text-purple-500' />
                  <span className='text-sm font-medium'>2,000 USDC</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='outline' size='sm'>
                    <FileText className='mr-2 h-4 w-4' />
                    View Submissions
                  </Button>
                  <Button variant='outline' size='sm'>
                    Edit Bounty
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-base'>
                  Develop a Cross-Chain Bridge UI
                </CardTitle>
                <Badge variant='secondary'>Open</Badge>
              </div>
              <CardDescription>
                Due April 30, 2025 • 1 submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-4'>
                Build a user interface for a bridge that connects Aptos,
                Ethereum, and Solana. The UI should be intuitive and guide users
                through the bridging process.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Award className='mr-1 h-4 w-4 text-purple-500' />
                  <span className='text-sm font-medium'>3,000 USDC</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='outline' size='sm'>
                    <FileText className='mr-2 h-4 w-4' />
                    View Submissions
                  </Button>
                  <Button variant='outline' size='sm'>
                    Edit Bounty
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='completed' className='mt-6 space-y-4'>
          <Card>
            <CardHeader className='pb-2'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-base'>
                  Build a Cross-Chain Token Bridge UI
                </CardTitle>
                <Badge className='bg-green-500 hover:bg-green-600'>
                  Completed
                </Badge>
              </div>
              <CardDescription>Aptos Foundation • April 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-4'>
                Created a user-friendly interface for bridging tokens between
                Aptos and Ethereum. Implemented wallet connections, transaction
                signing, and real-time status updates.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Award className='mr-1 h-4 w-4 text-purple-500' />
                  <span className='text-sm font-medium'>4,000 APT</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='outline' size='sm'>
                    <ExternalLink className='mr-2 h-4 w-4' />
                    View Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <div className='flex items-center justify-between'>
                <CardTitle className='text-base'>
                  Develop a Multi-Chain Wallet SDK
                </CardTitle>
                <Badge className='bg-green-500 hover:bg-green-600'>
                  Completed
                </Badge>
              </div>
              <CardDescription>Chain Labs • March 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-4'>
                Built a JavaScript SDK that allows developers to integrate
                wallet functionality for Aptos, Ethereum, and Solana in their
                applications with a unified API.
              </p>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Award className='mr-1 h-4 w-4 text-purple-500' />
                  <span className='text-sm font-medium'>3,500 USDC</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='outline' size='sm'>
                    <ExternalLink className='mr-2 h-4 w-4' />
                    View Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import {
  Award,
  Check,
  ExternalLink,
  Github,
  Globe,
  Twitter,
} from 'lucide-react';

export default function Page() {
  return (
    <main className='container py-6 mx-auto'>
      <div className='grid gap-6 lg:grid-cols-3'>
        <div>
          <Card>
            <CardHeader className='flex flex-col items-center text-center'>
              <Avatar className='h-24 w-24'>
                <AvatarImage src='/placeholder.svg' alt='@username' />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <CardTitle className='mt-4'>Alex Johnson</CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
              <div className='mt-2 flex flex-wrap justify-center gap-2'>
                <Badge
                  variant='outline'
                  className='bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                >
                  Aptos
                </Badge>
                <Badge
                  variant='outline'
                  className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                >
                  Ethereum
                </Badge>
                <Badge variant='outline'>Move</Badge>
                <Badge variant='outline'>Solidity</Badge>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex justify-center gap-2'>
                <Button variant='outline' size='icon'>
                  <Twitter className='h-4 w-4' />
                </Button>
                <Button variant='outline' size='icon'>
                  <Github className='h-4 w-4' />
                </Button>
                <Button variant='outline' size='icon'>
                  <Globe className='h-4 w-4' />
                </Button>
              </div>
              <div className='text-center text-sm text-muted-foreground'>
                <p>Member since April 2024</p>
                <p>0x1a2b3c4d5e6f7g8h9i0j</p>
              </div>
              <div className='grid grid-cols-3 gap-4 text-center'>
                <div>
                  <div className='text-2xl font-bold'>12</div>
                  <div className='text-xs text-muted-foreground'>Completed</div>
                </div>
                <div>
                  <div className='text-2xl font-bold'>$15k</div>
                  <div className='text-xs text-muted-foreground'>Earned</div>
                </div>
                <div>
                  <div className='text-2xl font-bold'>4.9</div>
                  <div className='text-xs text-muted-foreground'>Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>Move Programming</div>
                <Badge
                  variant='outline'
                  className='bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                >
                  Expert
                </Badge>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>Solidity</div>
                <Badge
                  variant='outline'
                  className='bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                >
                  Expert
                </Badge>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>React</div>
                <Badge
                  variant='outline'
                  className='bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                >
                  Expert
                </Badge>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>Cross-Chain Development</div>
                <Badge
                  variant='outline'
                  className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                >
                  Intermediate
                </Badge>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-sm'>UI/UX Design</div>
                <Badge
                  variant='outline'
                  className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                >
                  Intermediate
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='lg:col-span-2'>
          <Tabs defaultValue='completed'>
            <TabsList>
              <TabsTrigger value='completed'>Completed Bounties</TabsTrigger>
              <TabsTrigger value='active'>Active Bounties</TabsTrigger>
              <TabsTrigger value='created'>Created Bounties</TabsTrigger>
            </TabsList>
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
                  <CardDescription>
                    Aptos Foundation • April 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Created a user-friendly interface for bridging tokens
                    between Aptos and Ethereum. Implemented wallet connections,
                    transaction signing, and real-time status updates.
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
                    wallet functionality for Aptos, Ethereum, and Solana in
                    their applications with a unified API.
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

              <Card>
                <CardHeader className='pb-2'>
                  <div className='flex items-center justify-between'>
                    <CardTitle className='text-base'>
                      Create Educational Content for Move
                    </CardTitle>
                    <Badge className='bg-green-500 hover:bg-green-600'>
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>Aptos Learn • February 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Developed a comprehensive tutorial series explaining Move
                    programming language concepts, with practical examples and
                    exercises for beginners.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Award className='mr-1 h-4 w-4 text-purple-500' />
                      <span className='text-sm font-medium'>2,000 APT</span>
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
            <TabsContent value='active' className='mt-6 space-y-4'>
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
                    Creating a marketplace that allows users to buy and sell
                    NFTs across Aptos and Ethereum. Currently implementing the
                    cross-chain transaction functionality.
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <Award className='mr-1 h-4 w-4 text-purple-500' />
                      <span className='text-sm font-medium'>5,000 APT</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Button variant='outline' size='sm'>
                        <Check className='mr-2 h-4 w-4' />
                        Submit Work
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
                        Manage Bounty
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

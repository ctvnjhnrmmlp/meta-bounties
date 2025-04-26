import { auth } from '@workspace/auth';
import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@workspace/ui/components/tabs';
import {
  Award,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await auth();

  const bounty = {
    title: 'Build a Cross-Chain NFT Marketplace',
    description:
      'Create a marketplace that allows users to buy and sell NFTs across Aptos and Ethereum. The marketplace should support viewing, listing, and purchasing NFTs from both chains in a unified interface.',
    reward: '5,000 APT',
    chain: 'aptos',
    category: 'Development',
    deadline: 'April 20, 2025',
    timeLeft: '5 days left',
    submissions: 3,
    requirements: [
      'Experience with Aptos Move and Ethereum Solidity',
      'Previous experience building NFT applications',
      'Strong frontend development skills',
      'Understanding of cross-chain bridges and communication',
    ],
    deliverables: [
      'Functional NFT marketplace supporting Aptos and Ethereum',
      'Clean, responsive UI/UX design',
      'Documentation for the codebase',
      'Deployment instructions',
    ],
    creator: {
      name: 'Aptos Foundation',
      image: '/placeholder.svg',
    },
  };

  if (!session) {
    return redirect('/signin');
  }

  console.log(params);

  return (
    <main className='container py-6 mx-auto'>
      <div className='grid gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-wrap gap-2'>
              <Badge
                variant='outline'
                className='bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
              >
                {bounty.chain.charAt(0).toUpperCase() + bounty.chain.slice(1)}
              </Badge>
              <Badge variant='outline'>{bounty.category}</Badge>
            </div>
            <h1 className='text-3xl font-bold tracking-tight'>
              {bounty.title}
            </h1>
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center'>
                <Award className='mr-1 h-4 w-4 text-purple-500' />
                <span className='font-medium'>{bounty.reward}</span>
              </div>
              <div className='flex items-center'>
                <Calendar className='mr-1 h-4 w-4' />
                <span>Due {bounty.deadline}</span>
              </div>
              <div className='flex items-center'>
                <Clock className='mr-1 h-4 w-4' />
                <span>{bounty.timeLeft}</span>
              </div>
              <div className='flex items-center'>
                <Users className='mr-1 h-4 w-4' />
                <span>{bounty.submissions} submissions</span>
              </div>
            </div>
          </div>
          <Tabs defaultValue='details' className='mt-6'>
            <TabsList>
              <TabsTrigger value='details'>Details</TabsTrigger>
              <TabsTrigger value='submissions'>Submissions</TabsTrigger>
              <TabsTrigger value='updates'>Updates</TabsTrigger>
            </TabsList>
            <TabsContent value='details' className='mt-4 space-y-6'>
              <div>
                <h2 className='text-xl font-semibold mb-2'>Description</h2>
                <p className='text-muted-foreground'>{bounty.description}</p>
              </div>

              <div>
                <h2 className='text-xl font-semibold mb-2'>Requirements</h2>
                <ul className='list-disc pl-5 space-y-1 text-muted-foreground'>
                  {bounty.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-xl font-semibold mb-2'>Deliverables</h2>
                <ul className='list-disc pl-5 space-y-1 text-muted-foreground'>
                  {bounty.deliverables.map((del, index) => (
                    <li key={index}>{del}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='submissions'>
              <div className='mt-4 space-y-4'>
                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='font-medium'>Submission #3</div>
                        <Badge>Pending Review</Badge>
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        2 hours ago
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Ive completed the marketplace with support for both
                      chains. The UI is responsive and includes all requested
                      features.
                    </p>
                    <div className='flex items-center gap-2'>
                      <Button variant='outline' size='sm'>
                        <FileText className='mr-2 h-4 w-4' />
                        View Details
                      </Button>
                      <Button variant='outline' size='sm'>
                        <ExternalLink className='mr-2 h-4 w-4' />
                        View Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='font-medium'>Submission #2</div>
                        <Badge variant='outline'>Under Review</Badge>
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        1 day ago
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Ive implemented the marketplace with basic functionality
                      for both chains. Still working on optimizing the UI and
                      adding some additional features.
                    </p>
                    <div className='flex items-center gap-2'>
                      <Button variant='outline' size='sm'>
                        <FileText className='mr-2 h-4 w-4' />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='font-medium'>Submission #1</div>
                        <Badge variant='secondary'>Rejected</Badge>
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        3 days ago
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Initial submission with Aptos support only. Need to add
                      Ethereum integration.
                    </p>
                    <div className='flex items-center gap-2'>
                      <Button variant='outline' size='sm'>
                        <FileText className='mr-2 h-4 w-4' />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value='updates'>
              <div className='mt-4 space-y-4'>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-base'>
                      Deadline Extended
                    </CardTitle>
                    <CardDescription>Posted 2 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      Weve extended the deadline by 2 days to allow for more
                      comprehensive submissions. Please ensure cross-chain
                      functionality is thoroughly tested.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-base'>
                      Requirements Clarification
                    </CardTitle>
                    <CardDescription>Posted 4 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      To clarify, the marketplace should support both viewing
                      and trading NFTs across chains. Users should be able to
                      see NFTs from both Aptos and Ethereum in a unified
                      interface.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Apply for this Bounty</CardTitle>
              <CardDescription>
                Submit your work to earn the reward
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Award className='h-5 w-5 text-purple-500' />
                <div className='font-medium'>{bounty.reward}</div>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='h-5 w-5' />
                <div>{bounty.timeLeft}</div>
              </div>
              <Button className='w-full'>Apply Now</Button>
              <Button variant='outline' className='w-full'>
                Save for Later
              </Button>
            </CardContent>
          </Card>
          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>About the Creator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex items-center gap-3'>
                <div className='h-10 w-10 rounded-full overflow-hidden'>
                  <Image
                    src={bounty.creator.image || '/placeholder.svg'}
                    alt={bounty.creator.name}
                    width={100}
                    height={100}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div>
                  <div className='font-medium'>{bounty.creator.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    Verified Creator
                  </div>
                </div>
              </div>
              <Button variant='link' className='mt-2 p-0 h-auto'>
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card className='mt-4'>
            <CardHeader>
              <CardTitle>Similar Bounties</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <Link href='#' className='text-sm font-medium hover:underline'>
                  Create a Multi-Chain Token Dashboard
                </Link>
                <div className='text-xs text-muted-foreground'>
                  3,000 USDC • 8 days left
                </div>
              </div>
              <div>
                <Link href='#' className='text-sm font-medium hover:underline'>
                  Build an NFT Bridge Between Aptos and Ethereum
                </Link>
                <div className='text-xs text-muted-foreground'>
                  4,500 APT • 12 days left
                </div>
              </div>
              <div>
                <Link href='#' className='text-sm font-medium hover:underline'>
                  Develop a Cross-Chain DeFi Analytics Tool
                </Link>
                <div className='text-xs text-muted-foreground'>
                  2,800 USDC • 6 days left
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

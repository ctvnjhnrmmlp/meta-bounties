'use client';

import { auth } from '@/auth';
import { DatePicker } from '@/components/blocks/popover/date-picker';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title must be at least 5 characters.',
  }),
  description: z.string().min(20, {
    message: 'Description must be at least 20 characters.',
  }),
  chain: z.string({
    required_error: 'Please select a blockchain.',
  }),
  category: z.string({
    required_error: 'Please select a category.',
  }),
  reward: z.string().min(1, {
    message: 'Reward amount is required.',
  }),
  rewardToken: z.string({
    required_error: 'Please select a token.',
  }),
  deadline: z.date({
    required_error: 'Please select a deadline.',
  }),
  requirements: z.string().min(10, {
    message: 'Requirements must be at least 10 characters.',
  }),
  deliverables: z.string().min(10, {
    message: 'Deliverables must be at least 10 characters.',
  }),
});

export default async function Page() {
  const session = await auth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      requirements: '',
      deliverables: '',
      reward: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  if (!session) {
    return redirect('/signin');
  }

  return (
    <main className='container py-6 mx-auto'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='text-3xl font-bold tracking-tight mb-6'>
          Create a Bounty
        </h1>
        <Tabs defaultValue='details'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='details'>Details</TabsTrigger>
            <TabsTrigger value='requirements'>Requirements</TabsTrigger>
            <TabsTrigger value='preview'>Preview</TabsTrigger>
          </TabsList>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TabsContent value='details'>
                <Card>
                  <CardHeader>
                    <CardTitle>Bounty Details</CardTitle>
                    <CardDescription>
                      Provide the basic information about your bounty
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='E.g., Build a Cross-Chain NFT Marketplace'
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            A clear, concise title for your bounty
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='description'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Describe the bounty in detail...'
                              className='min-h-32'
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a detailed description of what youre looking
                            for
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='grid grid-cols-2 gap-4'>
                      <FormField
                        control={form.control}
                        name='chain'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Blockchain</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder='Select blockchain' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value='aptos'>Aptos</SelectItem>
                                <SelectItem value='ethereum'>
                                  Ethereum
                                </SelectItem>
                                <SelectItem value='solana'>Solana</SelectItem>
                                <SelectItem value='polygon'>Polygon</SelectItem>
                                <SelectItem value='multiple'>
                                  Multiple Chains
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              The blockchain this bounty is for
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='category'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder='Select category' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value='development'>
                                  Development
                                </SelectItem>
                                <SelectItem value='design'>Design</SelectItem>
                                <SelectItem value='content'>Content</SelectItem>
                                <SelectItem value='marketing'>
                                  Marketing
                                </SelectItem>
                                <SelectItem value='documentation'>
                                  Documentation
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              The type of work required
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='grid grid-cols-2 gap-2'>
                        <FormField
                          control={form.control}
                          name='reward'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Reward Amount</FormLabel>
                              <FormControl>
                                <Input type='number' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='rewardToken'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Token</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Token' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value='apt'>APT</SelectItem>
                                  <SelectItem value='eth'>ETH</SelectItem>
                                  <SelectItem value='sol'>SOL</SelectItem>
                                  <SelectItem value='usdc'>USDC</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name='deadline'
                        render={({ field }) => (
                          <FormItem className='flex flex-col'>
                            <FormLabel>Deadline</FormLabel>
                            <DatePicker
                              date={field.value}
                              setDate={field.onChange}
                            />
                            <FormDescription>
                              When the bounty submissions close
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='flex justify-end'>
                      <Button
                        type='button'
                        onClick={() =>
                          form.trigger([
                            'title',
                            'description',
                            'chain',
                            'category',
                            'reward',
                            'rewardToken',
                            'deadline',
                          ])
                        }
                      >
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='requirements'>
                <Card>
                  <CardHeader>
                    <CardTitle>Requirements & Deliverables</CardTitle>
                    <CardDescription>
                      Specify what you need from contributors
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <FormField
                      control={form.control}
                      name='requirements'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='List the skills and experience required...'
                              className='min-h-32'
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Specify the skills, experience, or qualifications
                            needed
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='deliverables'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Deliverables</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='List what should be delivered...'
                              className='min-h-32'
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Clearly define what needs to be submitted
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='flex justify-between'>
                      <Button type='button' variant='outline'>
                        Back
                      </Button>
                      <Button type='button'>Continue</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='preview'>
                <Card>
                  <CardHeader>
                    <CardTitle>Preview Your Bounty</CardTitle>
                    <CardDescription>
                      Review your bounty before publishing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='rounded-lg border p-4'>
                      <h2 className='text-xl font-bold mb-2'>
                        {form.watch('title') || 'Bounty Title'}
                      </h2>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {form.watch('chain') && (
                          <div className='text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-2 py-1 rounded-full'>
                            {form.watch('chain').charAt(0).toUpperCase() +
                              form.watch('chain').slice(1)}
                          </div>
                        )}
                        {form.watch('category') && (
                          <div className='text-xs bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 px-2 py-1 rounded-full'>
                            {form.watch('category').charAt(0).toUpperCase() +
                              form.watch('category').slice(1)}
                          </div>
                        )}
                      </div>
                      <div className='text-sm text-muted-foreground mb-4'>
                        {form.watch('description') ||
                          'Bounty description will appear here.'}
                      </div>
                      <div className='mb-4'>
                        <h3 className='text-sm font-semibold mb-1'>
                          Requirements
                        </h3>
                        <div className='text-sm text-muted-foreground'>
                          {form.watch('requirements') ||
                            'Requirements will appear here.'}
                        </div>
                      </div>
                      <div className='mb-4'>
                        <h3 className='text-sm font-semibold mb-1'>
                          Deliverables
                        </h3>
                        <div className='text-sm text-muted-foreground'>
                          {form.watch('deliverables') ||
                            'Deliverables will appear here.'}
                        </div>
                      </div>
                      <div className='flex items-center justify-between text-sm'>
                        <div className='font-medium'>
                          {form.watch('reward') && form.watch('rewardToken')
                            ? `${form.watch('reward')} ${form
                                .watch('rewardToken')
                                .toUpperCase()}`
                            : 'Reward amount'}
                        </div>
                        <div>
                          {form.watch('deadline')
                            ? `Due ${form
                                .watch('deadline')
                                .toLocaleDateString()}`
                            : 'Deadline'}
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <Button type='button' variant='outline'>
                        Back
                      </Button>
                      <Button type='submit'>Publish Bounty</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </form>
          </Form>
        </Tabs>
      </div>
    </main>
  );
}

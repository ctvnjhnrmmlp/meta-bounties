import { Badge } from '@workspace/ui/components/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';
import { Award, Clock, Star } from 'lucide-react';
import Link from 'next/link';

interface BountyCardProps {
  title: string;
  description: string;
  reward: string;
  chain: 'aptos' | 'ethereum' | 'solana' | string;
  category: string;
  deadline: string;
  featured?: boolean;
  isNew?: boolean;
}

const BountyCard = ({
  title,
  description,
  reward,
  chain,
  category,
  deadline,
  featured = false,
  isNew = false,
}: BountyCardProps) => {
  const chainColors = {
    aptos:
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    ethereum: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    solana: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  };

  const chainColor =
    chainColors[chain as keyof typeof chainColors] ||
    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';

  return (
    <Link
      href={`/bounties/${encodeURIComponent(
        title.toLowerCase().replace(/ /g, '-')
      )}`}
    >
      <Card
        className={cn(
          'h-full transition-all hover:shadow-md',
          featured ? 'border-purple-200 dark:border-purple-800' : ''
        )}
      >
        <CardHeader className='relative pb-2'>
          <div className='flex justify-between items-start'>
            <Badge variant='outline' className={chainColor}>
              {chain.charAt(0).toUpperCase() + chain.slice(1)}
            </Badge>
            <Badge variant='outline'>{category}</Badge>
          </div>
          {featured && (
            <div className='absolute top-2 right-2'>
              <Star className='h-5 w-5 fill-yellow-400 text-yellow-400' />
            </div>
          )}
          {isNew && (
            <Badge className='absolute top-2 right-2 bg-green-500 hover:bg-green-600'>
              New
            </Badge>
          )}
          <CardTitle className='text-xl mt-2 line-clamp-2'>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground line-clamp-3'>{description}</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <div className='flex items-center text-sm'>
            <Award className='mr-1 h-4 w-4 text-purple-500' />
            <span className='font-medium'>{reward}</span>
          </div>
          <div className='flex items-center text-sm text-muted-foreground'>
            <Clock className='mr-1 h-4 w-4' />
            <span>{deadline}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BountyCard;

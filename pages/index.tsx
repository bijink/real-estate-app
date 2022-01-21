import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

type BannerProps = {
   purpose: string,
   imageUrl: string,
   title1: string,
   title2: string,
   desc1: string,
   desc2: string,
   linkName: string,
   buttonText: string,
};


const Banner = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }: BannerProps) => (
   <Flex flexWrap={'wrap'} justifyContent='center' alignItems={'center'} m={'10'} >
      <Image src={imageUrl} width={500} height={300} alt='banner' />
      <Box p={5}>
         <Text color={'gray.500'} fontSize={'sm'} fontWeight={'medium'} >{purpose}</Text>
         <Text fontSize='3xl' fontWeight='bold' >{title1}<br />{title2}</Text>
         <Text color='gray.700' fontSize='lg' paddingTop={'3'} pb={3} fontWeight={'medium'} >{desc1}<br />{desc2}</Text>
         <Button fontSize={'xl'} >
            <Link href={linkName} >{buttonText}</Link>
         </Button>
      </Box>
   </Flex>
);

const Home: NextPage = () => {
   return (
      <div>
         <h1>Hello World</h1>
         <Banner
            purpose={'RENT A HOME'}
            title1='Rental Homes for'
            title2='Everybody'
            desc1='Explore Apartments, Villas, Homes'
            desc2='and more'
            buttonText='Expore Renting'
            linkName='/search?purpose=for-rent'
            imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
         />
         <Banner
            purpose={'BUY A HOME'}
            title1='Find, Buy & Own Your'
            title2='Dream Home'
            desc1='Explore Apartments, Villas, Homes'
            desc2='and more'
            buttonText='Expore Buying'
            linkName='/search?purpose=for-sale'
            imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
         />
      </div>
   );
};

export default Home;

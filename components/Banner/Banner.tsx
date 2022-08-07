// Types
import type { BannerProps } from './banner.types';

import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';


const Banner = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }: BannerProps) => (
   <Flex
      flexWrap={'wrap'}
      justifyContent='space-evenly'
      alignItems={'center'}
      bg="blackAlpha.200"
      m={10}
      p={5}
      borderRadius={8}
   >
      <Image src={imageUrl} width={500} height={300} alt='banner' />
      <Box p={5}>
         <Text color={'gray.500'} fontSize={'sm'} fontWeight={'medium'} >{purpose}</Text>
         <Text fontSize='3xl' fontWeight='bold' >{title1}<br />{title2}</Text>
         <Text color='gray.700' fontSize='lg' paddingTop={'3'} pb={3} fontWeight={'medium'} >{desc1}<br />{desc2}</Text>
         <Button fontSize={'xl'} bg="gray.300" >
            <Link href={linkName} >{buttonText}</Link>
         </Button>
      </Box>
   </Flex>
);

export default Banner;
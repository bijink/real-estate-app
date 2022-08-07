// Types
import type { GetStaticProps, NextPage } from 'next';
import type { HomePageProps } from '../types/pages.types';

import { Flex, Box } from '@chakra-ui/react';
// Utils
import { baseUrl, fetchApi } from '../utils/fetchApi';
// Components
import Banner from '../components/Banner/Banner';
import Property from '../components/Property/Property';
import RentHouseImg from '../assets/house-img-1.webp';
import SaleHouseImg from '../assets/house-img-2.webp';


const Home: NextPage<HomePageProps> = ({ propertiesForSale, propertiesForRent }) => {
   return (
      <Box pb={10} >
         {/* Rent */}
         <Banner
            purpose={'RENT A HOME'}
            title1='Rental Homes for'
            title2='Everybody'
            desc1='Explore Apartments, Villas, Homes'
            desc2='and more'
            buttonText='Expore Renting'
            linkName='/search?purpose=for-rent'
            imageUrl={RentHouseImg}
         />
         <Flex flexWrap='wrap' justifyContent="center" >
            {
               propertiesForRent.map((property) => <Property property={property} key={property.id} />)
            }
         </Flex>

         {/* Sale */}
         <Banner
            purpose={'BUY A HOME'}
            title1='Find, Buy & Own Your'
            title2='Dream Home'
            desc1='Explore Apartments, Villas, Homes'
            desc2='and more'
            buttonText='Expore Buying'
            linkName='/search?purpose=for-sale'
            imageUrl={SaleHouseImg}
         />
         <Flex flexWrap='wrap' justifyContent="center" >
            {
               propertiesForSale.map((property) => <Property property={property} key={property.id} />)
            }
         </Flex>
      </Box>
   );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

   return {
      props: {
         propertiesForSale: propertyForSale?.hits,
         propertiesForRent: propertyForRent?.hits,
      }
   };
};

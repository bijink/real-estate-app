import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import SearchFilters from "../components/SearchFilters/SearchFilters";
import Property from "../components/Property/Property";

import noresult from '../assets/img/noresult.svg';
import { baseUrl, fetchApi } from "../utils/fetchApi";
// Types
import type { GetServerSideProps, NextPage } from "next";
import type { SearchPropertiesProps } from "../types/pages.types";


const Search: NextPage<SearchPropertiesProps> = ({ properties }) => {
   const [searchFilters, setSearchFilters] = useState(false);
   const router = useRouter();

   return (
      <Box>
         <Flex
            cursor='pointer'
            bg={'gray.100'}
            borderBottom={'1px'}
            borderColor={'gray.200'}
            p={2}
            fontWeight={'black'}
            fontSize={'lg'}
            justifyContent={'center'}
            alignItems={'center'}
            onClick={() => setSearchFilters(prevFilters => !prevFilters)}
         >
            <Text>Search Property By Filters</Text>
            <Icon pl={2} w={7} as={BsFilter} />
         </Flex>
         {searchFilters && <SearchFilters />}
         <Text fontSize={'2xl'} p={'4'} fontWeight='bold' >
            Properties {((router.query.purpose === 'for-sale') && 'for Sale') || ((router.query.purpose === 'for-rent') && 'for Rent')}
         </Text>
         <Flex flexWrap={'wrap'} >
            {properties.map(property => <Property property={property} key={property.id} />)}
         </Flex>
         {properties.length === 0 && (
            <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} mt={5} mb={5} >
               <Image src={noresult} alt="no result" />
               <Text fontSize={'2xl'} mt={3} >No Results Found</Text>
            </Flex>
         )}
      </Box>
   );
};

export default Search;


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const purpose = query.purpose || 'for-rent';
   const rentFrequency = query.rentFreqency || 'yearly';
   const minPrice = query.minPrice || '0';
   const maxPrice = query.maxPrice || '1000000';
   const roomsMin = query.roomsMin || '0';
   const bathsMin = query.bathsMin || '0';
   const sort = query.sort || 'price-desc';
   const areaMax = query.areaMax || '35000';
   const locationExternalIDs = query.locationExternalIDs || '5002';
   const categoryExternalID = query.categoryExternalID || '4';

   const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

   return {
      props: {
         properties: data?.hits,
      }
   };
};
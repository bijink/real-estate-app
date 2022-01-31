import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from "millify";

import { baseUrl, fetchApi } from '../../utils/fetchApi';
// Types
import type { GetServerSideProps, NextPage } from "next";
import type { PropertyDetailsPropertiesProps } from "../../types/pages.types";

import ImageScrollbar from "../../components/ImageScrollbar/ImageScrollbar";


const PropertyDetails: NextPage<PropertyDetailsPropertiesProps> = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
   <Box maxWidth={'1000px'} m={'auto'} p={4} >
      {photos && <ImageScrollbar data={photos} />}
      <Box w={'full'} p={6} >
         <Flex pt={2} alignItems={'center'} justifyContent={'space-between'} >
            <Flex alignItems={'center'}>
               <Box pr={3} color={'green.400'} >{isVerified && <GoVerified />}</Box>
               <Text fontWeight={'bold'} fontSize={'lg'}>AED {millify(price)}{rentFrequency && ` / ${rentFrequency}`} </Text>
            </Flex>
            <Box>
               <Avatar size={'sm'} src={agency?.logo?.url} />
            </Box>
         </Flex>
         <Flex alignItems={'center'} p="1" justifyContent={'space-between'} w={'250px'} color={'blue.400'} >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
         </Flex>
         <Box mt={2} >
            <Text fontSize={'lg'} mb={2} fontWeight={'bold'} >{title}</Text>
            <Text lineHeight={2} color={'gray.400'} >{description}</Text>
         </Box>
         <Flex flexWrap={'wrap'} textTransform={'uppercase'} justifyContent={'space-between'} >
            <Flex justifyContent={'space-between'} w={400} borderBottom={1} borderColor={'gray.100'} p={3} >
               <Text>Type</Text>
               <Text fontWeight={'bold'} >{type}</Text>
            </Flex>
            <Flex justifyContent={'space-between'} w={400} borderBottom={1} borderColor={'gray.100'} p={3} >
               <Text>Purpose</Text>
               <Text fontWeight={'bold'} >{purpose}</Text>
            </Flex>
            {furnishingStatus && (
               <Flex justifyContent={'space-between'} w={400} borderBottom={1} borderColor={'gray.100'} p={3} >
                  <Text>Furnishing Status</Text>
                  <Text fontWeight={'bold'} >{furnishingStatus}</Text>
               </Flex>
            )}
         </Flex>
         <Box>
            {amenities.length && <Text fontSize={'2xl'} fontWeight={'black'} mt={5} >Amenities</Text>}
            <Flex flexWrap={'wrap'} >
               {amenities.map(item => (
                  item.amenities.map(amenity => (
                     <Text
                        key={amenity.text}
                        fontWeight={'bold'}
                        color={'blue.400'}
                        fontSize={'l'}
                        p={2}
                        bg={'gray.200'}
                        m={1}
                        borderRadius={5}
                     >
                        {amenity.text}</Text>
                  ))
               ))}
            </Flex>
         </Box>
      </Box>
   </Box>
);

export default PropertyDetails;


export const getServerSideProps: GetServerSideProps = async ({ params: { id } }: any) => {
   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

   // console.log(data);


   return {
      props: {
         propertyDetails: data
      }
   };
};

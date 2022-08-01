import type { FilterDataType } from "./searchFilters.types";

import { useState } from "react";
import { Flex, Select, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData } from '../../utils/filterData';
import { BsSearch } from "react-icons/bs";


const SearchFilters = () => {
   const router = useRouter();
   const { pathname, query } = router;

   const [filters] = useState(filterData);
   const [filteredObj, setFilteredObj] = useState({} as FilterDataType | any);
   let filterStr = '';


   const handleSearch = () => {
      for (const key in filteredObj) {
         if (Boolean(filteredObj[key])) {
            filterStr += `${key}=${filteredObj[key]}&`;
         }
      }
      const filterStrSlice = filterStr.slice(0, filterStr.length - 1);

      router.push({ pathname: pathname, query: filterStrSlice });
   };


   return (
      <Flex bg={'gray.100'} direction="column" p="2" >
         <Flex justifyContent={'center'} flexWrap={'wrap'} >
            {filters.map(filter => {
               let isSelected = false;

               Object.keys(query).forEach(item => {
                  if (filter.queryName == item) {
                     isSelected = true;
                  }
               });

               return (
                  <Box key={filter.queryName} >
                     <Select
                        variant='filled'
                        bg={isSelected ? 'blue.200' : 'gray.200'}
                        placeholder={filter.placeholder}
                        w={'fit-content'}
                        p={2}
                        onChange={(e) => setFilteredObj({ ...filteredObj, [filter.queryName]: e.target.value })}
                     >
                        {filter?.items?.map(item => (
                           <option value={item.value} key={item.value} >{item.name}</option>
                        ))}
                     </Select>
                  </Box>
               );
            })}
         </Flex>
         <Button
            colorScheme='blue'
            leftIcon={<BsSearch />}
            width={'20%'}
            size="sm"
            mx="auto"
            onClick={() => handleSearch()}
         >
            Search
         </Button>
      </Flex>
   );
};

export default SearchFilters;;

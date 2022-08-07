import type { FilterDataType, SearchFilterProps } from "./searchFilters.types";

import { useState } from "react";
import { Flex, Select, Box, Button, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData } from '../../data/filterData';
import { BsSearch } from "react-icons/bs";


const SearchFilters: React.FC<SearchFilterProps> = ({ totalDataLength }) => {
   const router = useRouter();
   const { pathname, query } = router;

   const [filters] = useState(filterData);
   const [filteredObj, setFilteredObj] = useState({} as FilterDataType);
   const [pageNum, setPageNum] = useState(1);


   const handleSearch = () => {
      let filterStr = '';

      for (const key in filteredObj) {
         if (Boolean(filteredObj[key])) {
            filterStr += `${key}=${filteredObj[key]}&`;
         }
      }
      const filterStrSlice = filterStr.slice(0, filterStr.length - 1);
      const filterStrWithPageNum = (isNaN(pageNum) ? '' : `page=${pageNum}`) + (filterStrSlice && `&${filterStrSlice}`);

      router.push({ pathname: pathname, query: filterStrWithPageNum });
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
         <Flex p={2} justifyContent='end'  >
            <Box bgColor="gray.300" p={2} borderRadius={5}  >
               <Flex justifyContent="space-between" alignItems="center" mb={2} >
                  <Text >{`Page(${totalDataLength}) : `}</Text>
                  <NumberInput
                     value={isNaN(pageNum) ? '' : pageNum}
                     onChange={(_, valueAsNumber) => setPageNum(valueAsNumber)}
                     width="6rem" size="sm" defaultValue={1} min={1} max={totalDataLength} step={1}>
                     <NumberInputField />
                     <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                     </NumberInputStepper>
                  </NumberInput>
               </Flex>
               <Button
                  colorScheme='blue'
                  leftIcon={<BsSearch />}
                  width='12rem'
                  size="sm"
                  onClick={() => handleSearch()}
               >
                  Search
               </Button>
            </Box>
         </Flex>
      </Flex>
   );
};

export default SearchFilters;;

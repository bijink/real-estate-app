import { RootObject } from "../../types/apiResObj.types";

export interface SearchFilterProps {
   totalDataLength: RootObject["nbPages"];
}

export type ObjectKey = {
   [key: string]: string;
};

export interface FilterDataType extends ObjectKey {
   purpose: string;
   rentFrequency: string;
   categoryExternalID: string;
   minPrice: string;
   maxPrice: string;
   areaMax: string;
   roomsMin: string;
   bathsMin: string;
   sort: string;
   locationExternalIDs: string;
   furnishingStatus: string;
};

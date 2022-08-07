import { Hit, RootObject } from "./apiResObj.types";


export interface HomePageProps {
   propertiesForRent: RootObject["hits"];
   propertiesForSale: RootObject["hits"];
};

export interface SearchPageProps {
   properties: RootObject["hits"],
   totalDataLength: RootObject["nbPages"];
}

export interface PropertyDetailsPageProps {
   propertyDetails: Hit;
};

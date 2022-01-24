export interface BannerProps {
   purpose: string,
   imageUrl: string,
   title1: string,
   title2: string,
   desc1: string,
   desc2: string,
   linkName: string,
   buttonText: string,
};

export interface PropertiesTypes {
   id: string,
   price: number,
   rentFrequency: string,
   rooms: number,
   title: string,
   baths: number,
   area: number,
   isVerified: boolean,
   externalID: string;

   coverPhoto: any,
   agency: any,
};

export interface PropertiesProps {
   propertiesForRent: PropertiesTypes[];
   propertiesForSale: PropertiesTypes[];
};

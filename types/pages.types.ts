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
   id: number,
   price: number,
   rentFrequency: string,
   rooms: number,
   title: string,
   baths: number,
   area: number,
   isVerified: boolean,
   externalID: string;
   coverPhoto: {
      externalID: string;
      id: number;
      main: boolean;
      nimaScore: number;
      orderIndex: number;
      title: string;
      url: string;
   };
   agency: {
      logo: {
         url: string;
      };
   };
};

export interface PropertiesProps {
   propertiesForRent: PropertiesTypes[];
   propertiesForSale: PropertiesTypes[];
};

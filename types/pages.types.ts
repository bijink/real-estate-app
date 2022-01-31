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
   // 
   description: string;
   type: string;
   purpose: string;
   furnishingStatus: string;
   amenities: [{
      externalGroupID: number,
      groupRank: number,
      text: string,
      // amenities: [];
      amenities: [{
         text: string;
      }];
   }],
   photos: [{
      id: number,
      externalID: string,
      title: string,
      url: string,
      orderIndex: number,
      nimaScore: number;
   }],
};

export interface PropertiesProps {
   propertiesForRent: PropertiesTypes[];
   propertiesForSale: PropertiesTypes[];
};

export interface SearchPropertiesProps {
   properties: PropertiesTypes[];
};

export interface PropertyDetailsPropertiesProps {
   propertyDetails: PropertiesTypes;
};

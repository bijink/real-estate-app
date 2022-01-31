export interface PhotosProps {
   data: [{
      id: number;
      externalID: string;
      title: string;
      url: string;
      orderIndex: number;
      nimaScore: number;
   }];
}
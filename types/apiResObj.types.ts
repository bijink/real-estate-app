export interface RootObject {
   exhaustiveNbHits: boolean;
   hits: Hit[];
   hitsPerPage: number;
   nbHits: number;
   nbPages: number;
   page: number;
   params: string;
   processingTimeMS: number;
   processingTimingsMS: ProcessingTimingsMS;
   query: string;
}

export interface Hit {
   _geoloc: Geo;
   _highlightResult: HighlightResult;
   agency: HitAgency;
   area: number;
   baths: number;
   category: Category[];
   cityLevelScore: number;
   completionStatus: CompletionStatus;
   contactName: string;
   coverPhoto: CoverPhoto;
   coverVideo?: CoverVideo;
   createdAt: number;
   externalID: string;
   extraFields: ExtraFields;
   floorPlanID: number | null;
   furnishingStatus: null | string;
   geography: Geo;
   hasMatchingFloorPlans: boolean;
   hash: string;
   hidePrice: boolean;
   id: number;
   indyScore: number;
   indyScore_l1: number;
   isVerified: boolean;
   keywords: string[];
   location: Category[];
   objectID: string;
   ownerID: number;
   panoramaCount: number;
   permitNumber: null | string;
   phoneNumber: PhoneNumber;
   photoCount: number;
   photoIDs: number[];
   price: number;
   product: HitProduct;
   productLabel: ProductLabel;
   productScore: number;
   projectNumber: null;
   purpose: Purpose;
   randBoostScore: number;
   randBoostScore_l1: number;
   reactivatedAt: number;
   referenceNumber: string;
   rentFrequency: RentFrequency;
   rooms: number;
   score: number;
   score_l1: number;
   slug: string;
   slug_l1: string;
   sourceID: number;
   state: State;
   title: string;
   title_l1: string;
   type: HitType;
   updatedAt: number;
   userExternalID: string;
   verification: Verification;
   verifiedScore: number;
   videoCount: number;
   // 
   description: string;
   amenities: [{
      externalGroupID: number,
      groupRank: number,
      text: string,
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
}

export interface Geo {
   lat: number;
   lng: number;
}

export interface HighlightResult {
   agency: HighlightResultAgency;
   externalID: ExternalID;
   keywords?: ExternalID[];
   referenceNumber: ExternalID;
   title: ExternalID;
}

export interface HighlightResultAgency {
   name: ExternalID;
}

export interface ExternalID {
   matchLevel: MatchLevel;
   matchedWords: any[];
   value: string;
}

export enum MatchLevel {
   None = "none",
}

export interface HitAgency {
   active: boolean;
   commercialNumber: null;
   createdAt: Date;
   externalID: string;
   id: number;
   licenses: License[];
   logo: Logo;
   name: string;
   name_l1: string;
   objectID: number;
   product: AgencyProduct;
   productScore: number;
   roles: any[];
   slug: string;
   slug_l1: string;
   tier: number;
}

export interface License {
   authority: Authority;
   number: string;
}

export enum Authority {
   Ded = "DED",
}

export interface Logo {
   id: number;
   url: string;
}

export enum AgencyProduct {
   Premium = "premium",
}

export interface Category {
   externalID: string;
   id: number;
   level: number;
   name: string;
   nameSingular?: NameSingular;
   nameSingular_l1?: NameSingularL1;
   name_l1: string;
   slug: string;
   slug_l1: string;
   type?: CategoryType;
}

export enum NameSingular {
   Apartment = "Apartment",
   Residential = "Residential",
}

export enum NameSingularL1 {
   سكني = "سكني",
   شقة = "شقة",
}

export enum CategoryType {
   CondoBuilding = "condo-building",
   Neighbourhood = "neighbourhood",
}

export enum CompletionStatus {
   Completed = "completed",
}

export interface CoverPhoto {
   externalID: string;
   id: number;
   main: boolean;
   nimaScore: number;
   orderIndex: number;
   title: null;
   url: string;
}

export interface CoverVideo {
   externalID: number;
   host: string;
   orderIndex: number;
   title: string;
   url: string;
}

export interface ExtraFields {
   dldBuildingNK?: string;
   dldPropertySK?: string;
}

export interface PhoneNumber {
   mobile: string;
   mobileNumbers: string[];
   phone: string;
   phoneNumbers: string[];
   proxyMobile?: string;
   proxyPhone?: string;
   whatsapp?: string;
}

export enum HitProduct {
   Superhot = "superhot",
}

export enum ProductLabel {
   Default = "default",
}

export enum Purpose {
   ForRent = "for-rent",
}

export enum RentFrequency {
   Monthly = "monthly",
}

export enum State {
   Active = "active",
}

export enum HitType {
   Property = "property",
}

export interface Verification {
   eligible: boolean;
   status: Status;
   updatedAt: number;
   verifiedAt: number;
}

export enum Status {
   Verified = "verified",
}

export interface ProcessingTimingsMS {
   afterSearch: AfterSearch;
   search: number;
   total: number;
}

export interface AfterSearch {
   format: Format;
   total: number;
}

export interface Format {
   total: number;
}

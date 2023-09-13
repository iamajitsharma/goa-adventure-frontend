export interface IAttributesPrivacy {
  privacy_policies: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
export interface IPrivacy {
  id: number;
  attributes: IAttributesPrivacy;
}

export interface IAttributesTerms {
  terms_conditions: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
export interface ITerms {
  id: number;
  attributes: IAttributesTerms;
}

// export interface IAttributeProduct {
//   activity_inclusion: string[];
//   activity_exclusion: string[];
//   city: string;
//   country: string;
//   discount_percent: string;
//   duration: string;
//   featured_image: any;
//   gallery: any;
//   highlight: string[];
//   overview: string;
//   price: string;
//   state: string;
//   title: string;
//   video: string;
// }

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

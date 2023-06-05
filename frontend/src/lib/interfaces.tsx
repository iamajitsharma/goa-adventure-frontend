export interface IAttributes {
  terms_conditions: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
export interface IPrivacy {
  id: number;
  attributes: IAttributes;
}

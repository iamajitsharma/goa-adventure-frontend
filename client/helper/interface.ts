export interface ProductCardProps {
  _id: string;
  product_title: string;
  slug: string;
  images: any;
  category: string;
  category_slug: string;
  price: number;
  discount: number;
  state: string;
  location: string;
  duration: string;
  deposit: number;
  meeting_point: string[];
}

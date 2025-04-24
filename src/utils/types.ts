export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  reviews: number;
  rating: number;
  imagePath: string;
  prevPrice?: number;
}

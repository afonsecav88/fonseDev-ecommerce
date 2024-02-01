import { Rating } from './Rating';

export interface ProductEntity {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

import { IRatingVO } from "./IRatingVO";

export interface IProductEntity {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRatingVO;
}
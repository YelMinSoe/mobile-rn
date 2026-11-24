export interface CategoryTypes {
  id: number;
  name: string;
  image: any;
}
interface UserTypes {
  id: number;
}
export interface ProductTypes {
  id: number;
  categories_id: number;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  users: UserTypes[];
  description: string;
}

export interface Product {
  id: number;
  name: string;
  photo: string;
  price: string;
  description: string;
  brand: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductCart {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

export interface CartProductProps {
  product: ProductCart;
  state: ProductCart[];
}

export interface IProduct {
  id: number;
  productName: string;
  descr: string;
  price: number;
}

export type IProductDetails = Partial<{
  id: number;
  productName: string;
  descr: string;
  price: number;
  brand: string;
  color: string;
}>;

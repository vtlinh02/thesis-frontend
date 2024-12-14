export interface Order {
  id: number;
  quantity: number;
  value: number;
  product: {
    id: number;
    name: string;
    description: string;
  };
}

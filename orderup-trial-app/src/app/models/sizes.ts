export class sizes {
  id: number;
  price: number;
  extra: number;
  extra_toppings: string[];

  constructor(
    fields?: {
      id?: number;
      price?: number;
      extra?: number;
      extra_toppings?: string[];
    }) {
    if (fields) Object.assign(this, fields);
  }
}

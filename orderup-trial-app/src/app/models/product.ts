import { uploaded } from './uploaded';
import { images } from './images';
import { sizes } from './sizes';
export class product {
  id: number;
  store_id: number;
  name: string;
  description: string;
  category_id: number;
  active: boolean;
  include_pickup: boolean;
  include_delivery: boolean;
  include_dinein: boolean;
  include_roomservice: boolean;
  extra_charge_label: string;
  PLUCode: string;
  upsell: boolean;
  instock: boolean;
  product_id: number;
  allow_instruction: boolean;
  availability: string;
  image_type: string;
  symbol: string;
  order: number;
  inc_toppings: string[];
  images: images;
  sizes: sizes;

  constructor(
    fields?: {
      id?: number;
      store_id?: number;
      name?: string;
      description?: string;
      active?: boolean;
      include_pickup?: boolean;
      include_delivery?: boolean;
      include_dinein?: boolean;
      include_roomservice?: boolean;
      extra_charge_label?: string;
      PLUCode?: string;
      upsell?: boolean;
      instock?: boolean;
      product_id?: number;
      allow_instruction?: boolean;
      availability?: string;
      image_type?: string;
      symbol?: string;
      order?: number;
      inc_toppings?: string[];
      images?: images;
      sizes?: sizes;
    }) {
    if (fields) Object.assign(this, fields);
  }
}

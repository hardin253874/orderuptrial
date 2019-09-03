import { uploaded } from './uploaded';
import { images } from './images';
import { sizes } from './sizes';
export class category {
  id: number;
  store_id: number;
  name: string;
  subtitle: string;
  description: string;
  category_type: number;
  active: boolean;
  menu_id: number;
  forsale: boolean;
  subcategory: number;
  include_pickup: boolean;
  include_delivery: boolean;
  include_dinein: boolean;
  include_roomservice: boolean;
  is_subcategory: boolean;
  sub_categories: number[];
  category_id: number;
  allow_instruction: boolean;
  availability: string;
  image_type: string;
  perrow: number;
  thumbsizes: number;
  thumbsizesmobile: number;
  order: number;
  images: images;
  products: number[];
  deals: number[];

  constructor(
    fields?: {
      id?: number;
      store_id?: number;
      name?: string;
      subtitle?: string;
      description?: string;
      category_type?: number;
      active?: boolean;
      menu_id?: number;
      forsale?: boolean;
      subcategory?: number;
      include_pickup?: boolean;
      include_delivery?: boolean;
      include_dinein?: boolean;
      include_roomservice?: boolean;
      is_subcategory?: boolean;
      sub_categories?: number[];
      category_id?: number;
      allow_instruction?: boolean;
      availability?: string;
      image_type?: string;
      perrow?: number;
      thumbsizes?: number;
      thumbsizesmobile?: number;
      order?: number;
      images?: images;
      products?: number[];
      deals?: number[];
    }) {
    if (fields) Object.assign(this, fields);
  }
}

import { uploaded } from './uploaded';

export class images {
  uploaded: uploaded;
  placeholder: string;
  low_res: string;
  med_res: string;
  high_res: string;

  constructor(
    fields?: {
      uploaded?: uploaded;
      placeholder?: string;
      low_res?: string;
      med_res?: string;
      high_res?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}

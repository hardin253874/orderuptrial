export class uploaded {
  placeholder: boolean;
  low_res: boolean;
  med_res: boolean;
  high_res: boolean;

  constructor(
    fields?: {
      placeholder?: boolean;
      low_res?: boolean;
      med_res?: boolean;
      high_res?: boolean;
    }) {
    if (fields) Object.assign(this, fields);
  }
}

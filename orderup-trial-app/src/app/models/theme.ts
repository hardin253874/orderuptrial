export class theme {
  store_id: number;
  business_name: string;
  business_abn: string;
  business_phone: string;
  business_address: string;

  constructor(
    fields?: {
      store_id?: number;
      business_name?: string;
      business_abn?: string;
      business_phone?: string;
      business_address?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}

export class SingleBrewery {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: null;
  address_3: null;
  city: string;
  state: string;
  county_province: null;
  postal_code: number;
  country: string;
  longitude: number;
  latitude: number;
  phone: number;
  website_url: string;
  updated_at: string;
  created_at: string;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || '';
    this.name = (obj && obj.name) || '';
    this.brewery_type = (obj && obj.brewery_type) || '';
    this.street = (obj && obj.street) || '';
    this.address_2 = (obj && obj.address_2) || null;
    this.address_3 = (obj && obj.address_3) || null;
    this.city = (obj && obj.city) || '';
    this.state = (obj && obj.state) || '';
    this.county_province = (obj && obj.county_province) || null;
    this.postal_code = (obj && obj.postal_code) || 0;
    this.country = (obj && obj.country) || '';
    this.longitude = (obj && obj.longitude) || 0;
    this.latitude = (obj && obj.latitude) || 0;
    this.phone = (obj && obj.phone) || 0;
    this.website_url = (obj && obj.website_url) || '';
    this.updated_at = (obj && obj.updated_at) || '';
    this.created_at = (obj && obj.created_at) || '';
  }
}

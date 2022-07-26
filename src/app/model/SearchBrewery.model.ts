export class SearchBrewary {
  id: string;
  name: string;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || '';
    this.name = (obj && obj.name) || '';
  }
}

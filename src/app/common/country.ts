export class Country {
  id: number = 0;
  countryName: String = '';

  constructor(country:Country){
    this.id=country.id;
    this.countryName=country.countryName;
  }
}

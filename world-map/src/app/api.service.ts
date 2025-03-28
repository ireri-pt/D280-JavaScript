import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryInfo(country: string) {
    let url = `http://api.worldbank.org/v2/country/${country.toLowerCase()}?format=json`;
    return this.http.get(url);
  }

  setCountryInfo(country: string) {
    return this.fetchCountryInfo(country).pipe(
      map((response: any) => {
        let data = response[1][0];
        let countryData = {
          country: data.name,
          city: data.capitalCity,
          region: data.region.value,
          income: data.incomeLevel.value,
          latitude: `${data.latitude}°`,
          longitude: `${data.longitude}°`
        };
        return countryData;
      })
    );
  }
}

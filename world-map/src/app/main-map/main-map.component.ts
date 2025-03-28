import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-map',
  standalone: true,
  imports: [],
  templateUrl: './main-map.component.html',
  styleUrl: './main-map.component.css'
})

export class MainMapComponent {
  countryInfo: any = {};
  countryHeader: string = 'Country Data';

  constructor (private apiService: ApiService) {}

  setCountryData(event: any) {
    let countryCode = event.target.id;
    this.apiService.setCountryInfo(countryCode).subscribe((data: any) => {
      this.countryInfo = Object.assign({}, data);
      this.countryHeader = this.countryInfo.country;
    });
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {} from 'googlemaps';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  public formSearch: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.setStandardForm();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getLocation();
    }, 5000);
  }

  public setStandardForm() {
    this.formSearch = this.formBuilder.group({
      city: ['', [Validators.required]]
    });
  }

  public onSubmit(event) {
    const { city } = this.formSearch.getRawValue();

    this.router.navigate(['/weather'], { queryParams: { city } });
  }

  public getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;

          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(latitude, longitude);

          console.log(geocoder);
          console.log(latlng);
          // geocoder.geocode({  }, (res, status) => {
          //   if (status === google.maps.GeocoderStatus.OK) {
          //     console.log(res);
          //   }
          // });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('não foi possível obter a localização!!!');
    }
  }
}

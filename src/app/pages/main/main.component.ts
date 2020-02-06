import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public formSearch: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.setStandardForm();
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
}

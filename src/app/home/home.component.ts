import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPlaces(){
    this.router.navigate(['/places']);
  }

  goToPeople(){
    this.router.navigate(['/people']);
  }
}
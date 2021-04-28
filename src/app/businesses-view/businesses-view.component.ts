import { Component, OnInit } from '@angular/core';
import { Business } from '../interfaces/business';
import { YelpService } from '../yelp.service';

@Component({
  selector: 'app-businesses-view',
  templateUrl: './businesses-view.component.html',
  styleUrls: ['./businesses-view.component.css']
})
export class BusinessesViewComponent implements OnInit {
businesses: Business;
  constructor(private service: YelpService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(
      (data:Business) => this.businesses = {...data},
      console.log(this.businesses),
      error => console.error(error)
    )
    console.log("log");
  }

}

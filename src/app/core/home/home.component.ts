import { Component, OnInit } from '@angular/core';
import { SingleBrewery } from 'src/app/model/SingleBrewery.model';
import { OpenBreweryService } from 'src/app/service/open-brewery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: OpenBreweryService) {}

  singleBrewery: SingleBrewery = new SingleBrewery();

  showSingleBrewery(): void {
    this.service.getSingleBrewery().subscribe({
      next: (dataSingleBrawery: SingleBrewery) => {
        this.singleBrewery = dataSingleBrawery;
      },
      error: (err?: any) => {
        //Some message
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.showSingleBrewery();
  }
}

import { Component, OnInit } from '@angular/core';
import { SingleBrewery } from 'src/app/model/SingleBrewery.model';
import { OpenBreweryService } from 'src/app/service/open-brewery.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  dataListOfBreweries: SingleBrewery[] = [];

  constructor(private service: OpenBreweryService) {}

  term: any;

  showListOfBreweries(): void {
    this.service.getListOfBreweries().subscribe({
      next: (listOfBreweries: SingleBrewery[]) => {
        this.dataListOfBreweries = listOfBreweries;
      },
      error: (err?: any) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.showListOfBreweries();
  }
}

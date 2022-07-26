import { Component, OnInit } from '@angular/core';
import { SearchBrewary } from 'src/app/model/SearchBrewery.model';
import { OpenBreweryService } from 'src/app/service/open-brewery.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css'],
})
export class BreweryComponent implements OnInit {
  constructor(private service: OpenBreweryService) {}

  breweryName: any;
  term: any;

  showAnotherSearch: boolean = false;

  searchBrewaryData: SearchBrewary[] = [];

  onInputChange() {
    this.service.getSearchListForBrewary(this.breweryName).subscribe({
      next: (search: SearchBrewary[]) => {
        this.searchBrewaryData = search;
        this.showAnotherSearch = true;
      },
      error: (err?: any) => {
        console.log(err);
      },
    });
    this.breweryName = '';
  }

  ngOnInit(): void {}
}

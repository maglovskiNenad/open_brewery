import { Component, Input, OnInit } from '@angular/core';
import { SingleBrewery } from 'src/app/model/SingleBrewery.model';

@Component({
  selector: 'app-brewery-place',
  templateUrl: './brewery-place.component.html',
  styleUrls: ['./brewery-place.component.css'],
})
export class BreweryPlaceComponent implements OnInit {
  @Input() singleBrewery: SingleBrewery = new SingleBrewery();

  constructor() {}

  ngOnInit(): void {}
}

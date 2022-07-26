import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryPlaceComponent } from './brewery-place.component';

describe('BreweryPlaceComponent', () => {
  let component: BreweryPlaceComponent;
  let fixture: ComponentFixture<BreweryPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

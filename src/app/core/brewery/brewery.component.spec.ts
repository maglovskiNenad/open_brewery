import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryComponent } from './brewery.component';

describe('BreweryComponent', () => {
  let component: BreweryComponent;
  let fixture: ComponentFixture<BreweryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

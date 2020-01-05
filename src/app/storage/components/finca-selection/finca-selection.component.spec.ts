import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaSelectionComponent } from './finca-selection.component';

describe('FincaSelectionComponent', () => {
  let component: FincaSelectionComponent;
  let fixture: ComponentFixture<FincaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FincaSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FincaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

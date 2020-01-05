import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaSelectionComponent } from './parcela-selection.component';

describe('ParcelaSelectionComponent', () => {
  let component: ParcelaSelectionComponent;
  let fixture: ComponentFixture<ParcelaSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelaSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletSelectionComponent } from './palet-selection.component';

describe('PaletSelectionComponent', () => {
  let component: PaletSelectionComponent;
  let fixture: ComponentFixture<PaletSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

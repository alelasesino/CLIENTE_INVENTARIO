import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStorageComponent } from './grid-storage.component';

describe('GridStorageComponent', () => {
  let component: GridStorageComponent;
  let fixture: ComponentFixture<GridStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

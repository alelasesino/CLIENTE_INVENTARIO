import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootStorageComponent } from './root-storage.component';

describe('RootStorageComponent', () => {
  let component: RootStorageComponent;
  let fixture: ComponentFixture<RootStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

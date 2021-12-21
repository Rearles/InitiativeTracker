import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertinitiativeComponent } from './insertinitiative.component';

describe('InsertinitiativeComponent', () => {
  let component: InsertinitiativeComponent;
  let fixture: ComponentFixture<InsertinitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertinitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertinitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

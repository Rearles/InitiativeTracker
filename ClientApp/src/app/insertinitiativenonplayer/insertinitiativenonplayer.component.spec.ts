import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertinitiativenonplayerComponent } from './insertinitiativenonplayer.component';

describe('InsertinitiativenonplayerComponent', () => {
  let component: InsertinitiativenonplayerComponent;
  let fixture: ComponentFixture<InsertinitiativenonplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertinitiativenonplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertinitiativenonplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

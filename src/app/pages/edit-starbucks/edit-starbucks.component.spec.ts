import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStarbucksComponent } from './edit-starbucks.component';

describe('EditStarbucksComponent', () => {
  let component: EditStarbucksComponent;
  let fixture: ComponentFixture<EditStarbucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStarbucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStarbucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

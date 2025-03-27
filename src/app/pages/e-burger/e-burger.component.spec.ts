import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBurgerComponent } from './e-burger.component';

describe('EBurgerComponent', () => {
  let component: EBurgerComponent;
  let fixture: ComponentFixture<EBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

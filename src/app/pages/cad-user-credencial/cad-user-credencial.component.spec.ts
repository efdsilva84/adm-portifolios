import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadUserCredencialComponent } from './cad-user-credencial.component';

describe('CadUserCredencialComponent', () => {
  let component: CadUserCredencialComponent;
  let fixture: ComponentFixture<CadUserCredencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadUserCredencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadUserCredencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosComponent } from './equipamentos';

describe('Equipamentos', () => {
  let component: EquipamentosComponent;
  let fixture: ComponentFixture<EquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipamentosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

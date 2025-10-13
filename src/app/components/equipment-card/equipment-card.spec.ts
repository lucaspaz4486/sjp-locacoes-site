import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { EquipmentCardComponent } from './equipment-card';
import { Equipment } from '../../data/mock-equipments';

describe('EquipmentCardComponent', () => {
  let component: EquipmentCardComponent;
  let fixture: ComponentFixture<EquipmentCardComponent>;

  const mockEquipment: Equipment = {
    id: 1,
    name: 'Teste',
    description: 'Descrição de teste',
    imageUrl: 'teste.png',
    category: 'Testes',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCardComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCardComponent);
    component = fixture.componentInstance;

    component.equipment = mockEquipment;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

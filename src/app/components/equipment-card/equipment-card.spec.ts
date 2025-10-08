import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { EquipmentCardComponent } from './equipment-card';

describe('EquipmentCard', () => {
  let component: EquipmentCardComponent;
  let fixture: ComponentFixture<EquipmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCardComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

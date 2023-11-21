import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PronosticoPage } from './pronostico.page';

describe('PronosticoPage', () => {
  let component: PronosticoPage;
  let fixture: ComponentFixture<PronosticoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PronosticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

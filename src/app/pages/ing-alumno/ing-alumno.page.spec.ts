import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngAlumnoPage } from './ing-alumno.page';

describe('IngAlumnoPage', () => {
  let component: IngAlumnoPage;
  let fixture: ComponentFixture<IngAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

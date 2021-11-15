import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirImageComponent } from './subir-image.component';

describe('SubirImageComponent', () => {
  let component: SubirImageComponent;
  let fixture: ComponentFixture<SubirImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

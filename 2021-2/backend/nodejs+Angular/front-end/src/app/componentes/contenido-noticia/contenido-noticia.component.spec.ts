import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoNoticiaComponent } from './contenido-noticia.component';

describe('ContenidoNoticiaComponent', () => {
  let component: ContenidoNoticiaComponent;
  let fixture: ComponentFixture<ContenidoNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

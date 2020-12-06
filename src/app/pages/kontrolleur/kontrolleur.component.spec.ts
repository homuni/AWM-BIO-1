import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolleurComponent } from './kontrolleur.component';

describe('KontrolleurComponent', () => {
  let component: KontrolleurComponent;
  let fixture: ComponentFixture<KontrolleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontrolleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrolleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

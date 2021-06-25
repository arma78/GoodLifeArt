import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjuboxplayerComponent } from './ejuboxplayer.component';

describe('EjuboxplayerComponent', () => {
  let component: EjuboxplayerComponent;
  let fixture: ComponentFixture<EjuboxplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjuboxplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjuboxplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

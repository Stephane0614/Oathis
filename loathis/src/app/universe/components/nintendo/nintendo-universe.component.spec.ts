import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoComponent } from './nintendo-universe.component';

describe('NintendoUniverseComponent', () => {
  let component: NintendoComponent;
  let fixture: ComponentFixture<NintendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NintendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

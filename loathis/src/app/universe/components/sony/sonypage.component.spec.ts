import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonypageComponent } from './sonypage.component';

describe('SonypageComponent', () => {
  let component: SonypageComponent;
  let fixture: ComponentFixture<SonypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftComponentComponent } from './microsoft.component';

describe('MicrosoftComponentComponent', () => {
  let component: MicrosoftComponentComponent;
  let fixture: ComponentFixture<MicrosoftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

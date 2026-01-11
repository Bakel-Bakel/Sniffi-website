import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertContactComponent } from './alert-contact.component';

describe('AlertContactComponent', () => {
  let component: AlertContactComponent;
  let fixture: ComponentFixture<AlertContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmellComponent } from './add-smell.component';

describe('AddSmellComponent', () => {
  let component: AddSmellComponent;
  let fixture: ComponentFixture<AddSmellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSmellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSmellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

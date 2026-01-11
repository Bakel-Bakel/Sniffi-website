import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSmellsComponent } from './target-smells.component';

describe('TargetSmellsComponent', () => {
  let component: TargetSmellsComponent;
  let fixture: ComponentFixture<TargetSmellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetSmellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetSmellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

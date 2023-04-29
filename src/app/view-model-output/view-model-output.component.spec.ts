import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModelOutputComponent } from './view-model-output.component';

describe('ViewModelOutputComponent', () => {
  let component: ViewModelOutputComponent;
  let fixture: ComponentFixture<ViewModelOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModelOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewModelOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOutputComponent } from './view-output.component';

describe('ViewOutputComponent', () => {
  let component: ViewOutputComponent;
  let fixture: ComponentFixture<ViewOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

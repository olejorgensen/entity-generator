import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOutputComponent } from './service-output.component';

describe('ServiceOutputComponent', () => {
  let component: ServiceOutputComponent;
  let fixture: ComponentFixture<ServiceOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

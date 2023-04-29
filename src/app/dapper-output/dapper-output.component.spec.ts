import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapperOutputComponent } from './dapper-output.component';

describe('DapperOutputComponent', () => {
  let component: DapperOutputComponent;
  let fixture: ComponentFixture<DapperOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DapperOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DapperOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

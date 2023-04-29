import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlOutputComponent } from './sql-output.component';

describe('SqlOutputComponent', () => {
  let component: SqlOutputComponent;
  let fixture: ComponentFixture<SqlOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfUserComponent } from './table-of-user.component';

describe('TableOfUserComponent', () => {
  let component: TableOfUserComponent;
  let fixture: ComponentFixture<TableOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

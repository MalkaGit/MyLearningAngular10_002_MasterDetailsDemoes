import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemV001ManagementComponent } from './item-v001-management.component';

describe('ItemV001ManagementComponent', () => {
  let component: ItemV001ManagementComponent;
  let fixture: ComponentFixture<ItemV001ManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemV001ManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemV001ManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

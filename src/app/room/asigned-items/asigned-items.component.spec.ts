import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignedItemsComponent } from './asigned-items.component';

describe('AsignedItemsComponent', () => {
  let component: AsignedItemsComponent;
  let fixture: ComponentFixture<AsignedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignedItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

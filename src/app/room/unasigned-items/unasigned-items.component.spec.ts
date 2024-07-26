import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnasignedItemsComponent } from './unasigned-items.component';

describe('UnasignedItemsComponent', () => {
  let component: UnasignedItemsComponent;
  let fixture: ComponentFixture<UnasignedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnasignedItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnasignedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

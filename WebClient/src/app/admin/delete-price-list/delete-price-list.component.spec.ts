import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePriceListComponent } from './delete-price-list.component';

describe('DeletePriceListComponent', () => {
  let component: DeletePriceListComponent;
  let fixture: ComponentFixture<DeletePriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

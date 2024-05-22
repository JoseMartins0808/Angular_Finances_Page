import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTransactionComponent } from './select-transaction.component';

describe('SelectTransactionComponent', () => {
  let component: SelectTransactionComponent;
  let fixture: ComponentFixture<SelectTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

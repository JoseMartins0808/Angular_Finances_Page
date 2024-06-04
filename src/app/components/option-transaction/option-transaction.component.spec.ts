import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTransactionComponent } from './option-transaction.component';

describe('OptionTransactionComponent', () => {
  let component: OptionTransactionComponent;
  let fixture: ComponentFixture<OptionTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

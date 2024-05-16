import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBoxComponent } from './field-box.component';

describe('FieldBoxComponent', () => {
  let component: FieldBoxComponent;
  let fixture: ComponentFixture<FieldBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

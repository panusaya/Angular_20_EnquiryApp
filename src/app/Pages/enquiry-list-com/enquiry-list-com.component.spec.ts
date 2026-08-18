import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryListComComponent } from './enquiry-list-com.component';

describe('EnquiryListComComponent', () => {
  let component: EnquiryListComComponent;
  let fixture: ComponentFixture<EnquiryListComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryListComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryListComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

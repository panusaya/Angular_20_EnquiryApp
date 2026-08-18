import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEnquiryComponent } from './submit-enquiry.component';

describe('SubmitEnquiryComponent', () => {
  let component: SubmitEnquiryComponent;
  let fixture: ComponentFixture<SubmitEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitEnquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

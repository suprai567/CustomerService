import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestByIdComponent } from './get-request-by-id.component';

describe('GetRequestByIdComponent', () => {
  let component: GetRequestByIdComponent;
  let fixture: ComponentFixture<GetRequestByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRequestByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRequestByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

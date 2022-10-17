import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRequestsComponent } from './get-all-requests.component';

describe('GetAllRequestsComponent', () => {
  let component: GetAllRequestsComponent;
  let fixture: ComponentFixture<GetAllRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserRequestComponent } from './update-user-request.component';

describe('UpdateUserRequestComponent', () => {
  let component: UpdateUserRequestComponent;
  let fixture: ComponentFixture<UpdateUserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

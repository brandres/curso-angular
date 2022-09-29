import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on valid form valid should be true', () =>{
    fixture.autoDetectChanges(true);
    component.userForm.setValue(
      {
        email: 'brandon@test.com',
        username: '1234',
        password: '12345678'
      }
    )
    expect(component.userForm.valid).toBeTrue();
  })

  it('on valid form valid should be true', () =>{
    fixture.autoDetectChanges(true);
    component.userForm.setValue(
      {
        email: 'brandon@test.com',
        username: '1234',
        password: '12345678'
      }
    )
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeFalse();
  })

});

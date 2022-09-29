import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../models/user.model';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers:[UserService],
      imports: [HttpClientTestingModule, ReactiveFormsModule ]
    });
    service = new UserService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be logged in', (done: DoneFn) => {
    const creds = {
      username: 'Bennett38',
      password: '2yq0LvOTNDrXEnM',
    }
    const expectedUser = [
      {
        "id": 1,
        "email": "Jovani_Terry70@gmail.com",
        "username": "Bennett38",
        "password": "2yq0LvOTNDrXEnM",
        "useragent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/4.1)"
      },
    ]
    httpClientSpy.get.and.returnValue(of(expectedUser));
    service.getUsersByProperties(creds).subscribe({
      next: (users: User[]) =>{
        expect(users).withContext('expected users').toEqual(expectedUser);
        done();
      error: done.fail
    }});

  });
});

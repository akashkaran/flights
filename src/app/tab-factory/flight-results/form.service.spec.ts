
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;
  let httpMock: HttpTestingController;
  const dummy = {
    response: {
      test: 'PASS'
    }
  };
  const url: string = './../../../assets/data.json'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(FormService);
    httpMock = TestBed.inject(HttpTestingController)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    service.getFlightResults().subscribe(res => {
      expect(res['response']).toBe(dummy.response);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummy);
  });




});

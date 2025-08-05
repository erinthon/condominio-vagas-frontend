import { TestBed } from '@angular/core/testing';
import {VagaService} from './vaga.service';


describe('Vaga', () => {
  let service: VagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

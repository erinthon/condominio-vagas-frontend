import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioListComponent } from './condominio-list.component';

describe('CondominioList', () => {
  let component: CondominioListComponent;
  let fixture: ComponentFixture<CondominioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondominioListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondominioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

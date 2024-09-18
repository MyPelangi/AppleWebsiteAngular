import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _footerComponent } from './footer.component';

describe('_footerComponent', () => {
  let component: _footerComponent;
  let fixture: ComponentFixture<_footerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ _footerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(_footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

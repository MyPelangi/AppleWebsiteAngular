import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _bodyComponent } from './body.component';

describe('_bodyComponent', () => {
  let component: _bodyComponent;
  let fixture: ComponentFixture<_bodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ _bodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(_bodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

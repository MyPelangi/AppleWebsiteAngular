import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _headerComponent } from './header.component';

describe('_headerComponent', () => {
  let component: _headerComponent;
  let fixture: ComponentFixture<_headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ _headerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(_headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

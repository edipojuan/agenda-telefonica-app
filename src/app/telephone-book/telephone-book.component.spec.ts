import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneBookComponent } from './telephone-book.component';

describe('TelephoneBookComponent', () => {
  let component: TelephoneBookComponent;
  let fixture: ComponentFixture<TelephoneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

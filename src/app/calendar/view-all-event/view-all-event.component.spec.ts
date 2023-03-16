import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEventComponent } from './view-all-event.component';

describe('ViewAllEventComponent', () => {
  let component: ViewAllEventComponent;
  let fixture: ComponentFixture<ViewAllEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

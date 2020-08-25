import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatThingComponent } from './feat-thing.component';

describe('FeatThingComponent', () => {
  let component: FeatThingComponent;
  let fixture: ComponentFixture<FeatThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParuComponent } from './paru.component';

describe('ParuComponent', () => {
  let component: ParuComponent;
  let fixture: ComponentFixture<ParuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

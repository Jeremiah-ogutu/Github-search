import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileresultComponent } from './profileresult.component';

describe('ProfileresultComponent', () => {
  let component: ProfileresultComponent;
  let fixture: ComponentFixture<ProfileresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

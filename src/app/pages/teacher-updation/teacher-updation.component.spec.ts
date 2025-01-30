import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUpdationComponent } from './teacher-updation.component';

describe('TeacherUpdationComponent', () => {
  let component: TeacherUpdationComponent;
  let fixture: ComponentFixture<TeacherUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherUpdationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

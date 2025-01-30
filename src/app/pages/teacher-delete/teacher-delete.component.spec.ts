import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDeleteComponent } from './teacher-delete.component';

describe('TeacherDeleteComponent', () => {
  let component: TeacherDeleteComponent;
  let fixture: ComponentFixture<TeacherDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

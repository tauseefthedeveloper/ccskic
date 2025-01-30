import { Component } from '@angular/core';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-teacher-list',
  imports: [],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
  teacherList:any[]=[];
  localTeacher:any;
  isLoading: boolean = true;

  constructor(private alert:AlertService){
    this.localTeacher=localStorage.getItem("teacher-details");
    this.teacherList=JSON.parse(this.localTeacher);
    alert.showAlert("All Teacher Details!","bg-success")
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
}

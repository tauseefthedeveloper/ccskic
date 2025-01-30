import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [FormsModule,NgIf],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  studentlist:any;
  studentlocal:any;
  classValue:String='1';
  classYear:String='2024-2025';
  countStudentInClass:number=0;
  isLoading:boolean=true;
  constructor(){
    this.studentlocal=localStorage.getItem('studentData');
    this.studentlist=JSON.parse(this.studentlocal);
    setTimeout(()=>{
      this.isLoading=false;
    },1000)
  }
  filteredStudents(){
    return this.studentlist.filter((item : any)=> item.year == this.classYear && item.class==this.classValue)
  }
  printData(){
    window.print();
  }
}

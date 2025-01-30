import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../service/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-updation',
  imports: [FormsModule,CommonModule],
  templateUrl: './teacher-updation.component.html',
  styleUrl: './teacher-updation.component.css'
})
export class TeacherUpdationComponent {
   divHideShow: boolean = false;
    Teacherlocal: any;
    Teacherlist: any;
    searchId: String = '';
    searchIdDeletion: String = '';
    classYear: String = '2024-2025';
    isLoading: boolean = true;

    constructor(private alertService:AlertService) {
      this.Teacherlocal = localStorage.getItem('teacher-details');
      this.Teacherlist = JSON.parse(this.Teacherlocal);
      setTimeout(() => {
        this.isLoading=false;
      }, 1000);
    }
    updateStudentData: any;
  onSearch() {
    console.log("List:",this.Teacherlist)
    if (!this.Teacherlist || this.Teacherlist.length === 0) {
      this.alertService.showAlert("No student data availabel","bg-primary")
      return;
    }
    const student = this.Teacherlist.find((item: any) => item.year == this.classYear && item.teacherid == this.searchId);
    console.log("teacher:",student)
    if (student) {
      this.updateStudentData = JSON.parse(JSON.stringify(student));
      this.divHideShow = true;
    } else {
      if (this.searchId != this.Teacherlist.find((item: any) => this.searchId) && this.classYear != this.Teacherlist.find((item: any) => this.classYear)) {
        const message=("No Teacher found with given ID " + this.searchId + " and Acedamic year " + this.classYear)
        this.alertService.showAlert(message,"bg-primary")
      }
      else {

      }
    }
  }
  onUpdate() {
    const index = this.Teacherlist.findIndex((item: any) => item.year == this.classYear && item.teacherid == this.updateStudentData.teacherid);
    if (index !== -1) {
      const currentDataStr = JSON.stringify(this.Teacherlist[index]);
      const updateDataStr = JSON.stringify(this.updateStudentData);

      if (currentDataStr != updateDataStr) {
        this.Teacherlist[index] = { ...this.updateStudentData };
        localStorage.setItem('studentData', JSON.stringify(this.Teacherlist));
        this.divHideShow = false;
        this.alertService.showAlert("Teacher data updated successfully!","bg-success")
      } else {
        this.alertService.showAlert("No changes done here","bg-dark")
      }
    }
  }

  onDelete() {
    const index = this.Teacherlist.findIndex((item: any) => item.teacherid == this.searchIdDeletion);

    if (index !== -1) {
      this.Teacherlist.splice(index, 1);
      localStorage.setItem('studentData', JSON.stringify(this.Teacherlist));
      this.divHideShow = false;
      this.alertService.showAlert('Teacher data deleted successfully!',"bg-success");
    } else {
      this.alertService.showAlert("Teacher not found for deletion","bg-dark");
    }
  }
}

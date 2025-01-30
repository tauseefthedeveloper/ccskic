import { Component } from '@angular/core';
import { AlertService } from '../../service/alert.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-delete',
  imports: [FormsModule,CommonModule],
  templateUrl: './teacher-delete.component.html',
  styleUrl: './teacher-delete.component.css'
})
export class TeacherDeleteComponent {
      divHideShow2: boolean = false;
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
  deleteData: any;
  onSearchDelete() {
    if (!this.Teacherlist || this.Teacherlist.length === 0) {
      this.alertService.showAlert("No Teacher data available","bg-success");
      return;
    }

    const student = this.Teacherlist.find((item: any) => item.year == this.classYear && item.teacherid == this.searchIdDeletion);
    if (student) {
      this.deleteData = JSON.parse(JSON.stringify(student));
      this.divHideShow2 = true;
    } else {
      if (this.searchIdDeletion != this.Teacherlist.find((item: any) => this.searchIdDeletion) && this.classYear != this.Teacherlist.find((item: any) => this.classYear)) {
        const message=("No Teacher found with given ID " + this.searchIdDeletion + " and Acedamic year " + this.classYear)
        this.alertService.showAlert(message,"bg-dark")
      }
      else {

      }
    }
  }
  onDelete() {
    const index = this.Teacherlist.findIndex((item: any) => item.teacherid == this.searchIdDeletion);

    if (index !== -1) {
      this.Teacherlist.splice(index, 1);
      localStorage.setItem('studentData', JSON.stringify(this.Teacherlist));
      this.divHideShow2 = false;
      this.alertService.showAlert('Teacher data deleted successfully!',"bg-success");
    } else {
      this.alertService.showAlert("Teacher not found for deletion","bg-info");
    }
  }
}

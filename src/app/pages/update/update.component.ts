import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../service/alert.service';
import { AlertComponent } from "../../shared/alert/alert.component";

@Component({
  selector: 'app-update',
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  divHideShow: boolean = false;
  divHideShow2: boolean = false;
  studentlocal: any;
  studentlist: any;
  searchId: String = '';
  searchIdDeletion: String = '';
  classYear: String = '2024-2025';
  isLoading:boolean=true;
  constructor(private alertService:AlertService) {
    this.studentlocal = localStorage.getItem('studentData');
    this.studentlist = JSON.parse(this.studentlocal);
    setTimeout(()=>{
      this.isLoading=false;
    },1000)
  }
  updateStudentData: any;
  onSearch() {
    if (!this.studentlist || this.studentlist.length === 0) {
      this.alertService.showAlert("No student data availabel","bg-primary")
      return;
    }
    const student = this.studentlist.find((item: any) => item.year == this.classYear && item.id == this.searchId);

    if (student) {
      this.updateStudentData = JSON.parse(JSON.stringify(student));
      this.divHideShow = true;
      this.divHideShow2 = false;
    } else {
      if (this.searchId != this.studentlist.find((item: any) => this.searchId) && this.classYear != this.studentlist.find((item: any) => this.classYear)) {
        const message=("No student found with given ID " + this.searchId + " and Acedamic year " + this.classYear)
        this.alertService.showAlert(message,"bg-primary")
      }
      else {

      }
    }
  }


  onUpdate() {
    const index = this.studentlist.findIndex((item: any) => item.year == this.classYear && item.id == this.updateStudentData.id);
    if (index !== -1) {
      const currentDataStr = JSON.stringify(this.studentlist[index]);
      const updateDataStr = JSON.stringify(this.updateStudentData);

      if (currentDataStr != updateDataStr) {
        this.studentlist[index] = { ...this.updateStudentData };
        localStorage.setItem('studentData', JSON.stringify(this.studentlist));
        this.divHideShow = false;
        this.divHideShow2 = false;
        this.alertService.showAlert("Student data updated successfully!","bg-success")
      } else {
        this.alertService.showAlert("No changes done here","bg-dark")
      }
    }
  }

  deleteData: any;
  onSearchDelete() {
    if (!this.studentlist || this.studentlist.length === 0) {
      this.alertService.showAlert("No student data available","bg-dark");
      return;
    }

    const student = this.studentlist.find((item: any) => item.year == this.classYear && item.id == this.searchIdDeletion);
    if (student) {
      this.deleteData = JSON.parse(JSON.stringify(student));
      this.divHideShow2 = true;
      this.divHideShow = false;
    } else {
      if (this.searchIdDeletion != this.studentlist.find((item: any) => this.searchIdDeletion) && this.classYear != this.studentlist.find((item: any) => this.classYear)) {
        const message=("No student found with given ID " + this.searchIdDeletion + " and Acedamic year " + this.classYear)
        this.alertService.showAlert(message,"bg-dark")
      }
      else {

      }
    }
  }


  onDelete() {
    const index = this.studentlist.findIndex((item: any) => item.id == this.searchIdDeletion);

    if (index !== -1) {
      this.studentlist.splice(index, 1);
      localStorage.setItem('studentData', JSON.stringify(this.studentlist));
      this.divHideShow2 = false;
      this.divHideShow = false;
      this.alertService.showAlert('Student data deleted successfully!',"bg-success");
    } else {
      this.alertService.showAlert("Student not found for deletion","bg-dark");
    }
  }

}
